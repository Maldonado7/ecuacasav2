-- Task 2: Provider type (Company vs Individual) + company fields.
-- Also adds the two-gate verification audit fields used by Task 3
-- (verification_notes, verified_at) so the admin can record who/when a
-- provider was promoted from Listed to Verified.

DO $$ BEGIN
  CREATE TYPE provider_kind AS ENUM ('individual','company');
EXCEPTION WHEN duplicate_object THEN null; END $$;

ALTER TABLE providers
  ADD COLUMN IF NOT EXISTS kind provider_kind DEFAULT 'individual',
  ADD COLUMN IF NOT EXISTS company_name TEXT,
  ADD COLUMN IF NOT EXISTS ruc TEXT,                 -- 13-digit Ecuadorian tax ID
  ADD COLUMN IF NOT EXISTS logo_url TEXT,
  ADD COLUMN IF NOT EXISTS business_hours TEXT,
  ADD COLUMN IF NOT EXISTS verification_notes TEXT,  -- Task 3: human-check log
  ADD COLUMN IF NOT EXISTS verified_at TIMESTAMPTZ;  -- Task 3: when badge was granted

ALTER TABLE registration_requests
  ADD COLUMN IF NOT EXISTS kind provider_kind DEFAULT 'individual',
  ADD COLUMN IF NOT EXISTS company_name TEXT,
  ADD COLUMN IF NOT EXISTS ruc TEXT,
  ADD COLUMN IF NOT EXISTS logo_url TEXT,
  ADD COLUMN IF NOT EXISTS business_hours TEXT;
