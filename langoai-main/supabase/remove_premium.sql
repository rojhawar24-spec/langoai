-- LangoAI — remove Premium/payment functionality from an existing database
-- Run once in Supabase SQL Editor after deploying the code changes.

DROP FUNCTION IF EXISTS public.grant_premium_entitlement(UUID, INTEGER, TEXT, TEXT, TEXT, NUMERIC, TEXT);
DROP TABLE IF EXISTS public.processed_payments;

ALTER TABLE IF EXISTS public.profiles
  DROP COLUMN IF EXISTS premium,
  DROP COLUMN IF EXISTS premium_expires_at;
