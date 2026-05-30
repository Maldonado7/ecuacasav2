-- Task 6: Drive provider rating + review_count from REAL review rows only.
-- A trigger recomputes the aggregate on every review insert/update/delete so
-- providers.rating / providers.review_count can never drift from reality.
-- New providers genuinely start at 0 reviews → the UI shows "Nuevo" (Task 4).

-- Optional moderation flag — keep reviews hideable without deleting them.
ALTER TABLE reviews
  ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'published';
  -- values: 'published' | 'hidden'

CREATE OR REPLACE FUNCTION recompute_provider_rating()
RETURNS TRIGGER AS $$
DECLARE
  pid UUID;
BEGIN
  pid := COALESCE(NEW.provider_id, OLD.provider_id);
  IF pid IS NULL THEN
    RETURN NULL;
  END IF;

  UPDATE providers p SET
    review_count = COALESCE((
      SELECT COUNT(*) FROM reviews r
      WHERE r.provider_id = pid AND r.status = 'published'
    ), 0),
    rating = COALESCE((
      SELECT ROUND(AVG(r.rating)::numeric, 1) FROM reviews r
      WHERE r.provider_id = pid AND r.status = 'published'
    ), 0)
  WHERE p.id = pid;

  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_reviews_recompute ON reviews;
CREATE TRIGGER trg_reviews_recompute
  AFTER INSERT OR UPDATE OR DELETE ON reviews
  FOR EACH ROW EXECUTE FUNCTION recompute_provider_rating();

-- One-time backfill: wipe any seeded/fake defaults and recompute from real rows.
UPDATE providers p SET
  review_count = COALESCE((
    SELECT COUNT(*) FROM reviews r
    WHERE r.provider_id = p.id AND r.status = 'published'
  ), 0),
  rating = COALESCE((
    SELECT ROUND(AVG(r.rating)::numeric, 1) FROM reviews r
    WHERE r.provider_id = p.id AND r.status = 'published'
  ), 0);

-- New providers should start at 0, not a fake 5.0.
ALTER TABLE providers ALTER COLUMN rating SET DEFAULT 0;
