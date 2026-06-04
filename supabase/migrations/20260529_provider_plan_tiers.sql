-- Task 7: Provider listing-fee tiers (revenue model). Built now, switched on
-- later once leads are proven to convert. No live payment processor yet —
-- billing is recorded manually by an admin (the "mark as paid" toggle) for the
-- first handful of paying providers. Cross-border payment integration is a
-- later decision.

ALTER TABLE providers
  ADD COLUMN IF NOT EXISTS plan TEXT DEFAULT 'free',   -- 'free' | 'listed' | 'featured'
  ADD COLUMN IF NOT EXISTS plan_renews_at TIMESTAMPTZ;
