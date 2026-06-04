-- Task 5: Optional, voluntary background certificate (Certificado de
-- Antecedentes Penales). By Decreto 1166 this CANNOT be required — it is only
-- offered voluntarily and must never block registration.
-- The certificate expires 90 days from its issue date (background_cert_date),
-- so surface that date in admin to request a renewal when stale.

ALTER TABLE providers
  ADD COLUMN IF NOT EXISTS background_cert_url TEXT,
  ADD COLUMN IF NOT EXISTS background_cert_code TEXT,
  ADD COLUMN IF NOT EXISTS background_cert_date DATE,
  -- Sub-badge, separate from the main Verified badge: set true only after the
  -- operator confirms the code on the government portal.
  ADD COLUMN IF NOT EXISTS background_verified BOOLEAN DEFAULT FALSE;

ALTER TABLE registration_requests
  ADD COLUMN IF NOT EXISTS background_cert_url TEXT,
  ADD COLUMN IF NOT EXISTS background_cert_code TEXT,
  ADD COLUMN IF NOT EXISTS background_cert_date DATE;
