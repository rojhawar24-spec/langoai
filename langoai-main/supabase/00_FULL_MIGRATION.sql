-- LangoAI FULL MIGRATION — run this ONE file in Supabase SQL Editor
-- Order is fixed. Do not reorder. Safe to re-run parts that use IF NOT EXISTS / OR REPLACE.
--
-- Contents:
--   1) schema.sql
--   2) email_verification.sql
--   3) content_catalog.sql   (tables arena_catalog + learning_content MUST exist before hardening RPCs)
--   4) security_hardening.sql

\echo 'NOTE: Supabase SQL Editor may not support \\i — paste/run files in this order instead:'
\echo '1 schema.sql'
\echo '2 email_verification.sql'
\echo '3 content_catalog.sql'
\echo '4 security_hardening.sql'
