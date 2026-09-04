-- Cross-device email verification handoff for LangoAI.
-- Run once in Supabase SQL Editor.

CREATE TABLE IF NOT EXISTS public.email_verification_requests (
  id UUID PRIMARY KEY,
  email TEXT NOT NULL,
  confirmed BOOLEAN NOT NULL DEFAULT FALSE,
  confirmed_user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  confirmed_at TIMESTAMPTZ NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS email_verification_requests_email_idx
  ON public.email_verification_requests (LOWER(email));

CREATE INDEX IF NOT EXISTS email_verification_requests_expires_idx
  ON public.email_verification_requests (expires_at);

ALTER TABLE public.email_verification_requests ENABLE ROW LEVEL SECURITY;

-- No anon/authenticated policies: only the server-side service_role API uses this table.

-- Store signup metadata on the auth user so the profile can be created reliably
-- even when email confirmation happens on a different device.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  meta JSONB := COALESCE(NEW.raw_user_meta_data, '{}'::jsonb);
  wanted_username TEXT := NULLIF(BTRIM(meta->>'username'), '');
BEGIN
  IF wanted_username IS NOT NULL THEN
    INSERT INTO public.profiles (
      id, username, email, current_language, theme, interface_language
    )
    VALUES (
      NEW.id,
      wanted_username,
      LOWER(NEW.email),
      NULLIF(meta->>'currentLanguage', ''),
      CASE WHEN meta->>'theme' IN ('light','dark') THEN meta->>'theme' ELSE 'light' END,
      COALESCE(NULLIF(meta->>'interfaceLanguage',''), 'en')
    )
    ON CONFLICT (id) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.handle_new_user();

REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, authenticated, anon;
