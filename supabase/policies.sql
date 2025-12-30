-- Row-Level Security Policies
-- Simple and safe policies without recursion

-- ============================================
-- ENABLE RLS
-- ============================================

ALTER TABLE providers ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE provider_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE provider_locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE registration_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- ============================================
-- PUBLIC READ POLICIES
-- ============================================

-- Anyone can view active providers
CREATE POLICY "public_view_active_providers"
  ON providers FOR SELECT
  USING (status = 'active');

-- Anyone can view all services
CREATE POLICY "public_view_services"
  ON services FOR SELECT
  USING (true);

-- Anyone can view all locations
CREATE POLICY "public_view_locations"
  ON locations FOR SELECT
  USING (true);

-- Anyone can view provider-service relationships for active providers
CREATE POLICY "public_view_provider_services"
  ON provider_services FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM providers
      WHERE providers.id = provider_services.provider_id
      AND providers.status = 'active'
    )
  );

-- Anyone can view provider-location relationships for active providers
CREATE POLICY "public_view_provider_locations"
  ON provider_locations FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM providers
      WHERE providers.id = provider_locations.provider_id
      AND providers.status = 'active'
    )
  );

-- Anyone can view verified reviews
CREATE POLICY "public_view_reviews"
  ON reviews FOR SELECT
  USING (verified = true);

-- ============================================
-- PUBLIC WRITE POLICIES
-- ============================================

-- Anyone can submit registration requests
CREATE POLICY "public_create_registration"
  ON registration_requests FOR INSERT
  WITH CHECK (true);

-- ============================================
-- ADMIN POLICIES
-- ============================================

-- Helper function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM admin_users
    WHERE email = auth.jwt() ->> 'email'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Admins can do everything on providers
CREATE POLICY "admin_all_providers"
  ON providers FOR ALL
  USING (is_admin())
  WITH CHECK (is_admin());

-- Admins can manage provider services
CREATE POLICY "admin_all_provider_services"
  ON provider_services FOR ALL
  USING (is_admin())
  WITH CHECK (is_admin());

-- Admins can manage provider locations
CREATE POLICY "admin_all_provider_locations"
  ON provider_locations FOR ALL
  USING (is_admin())
  WITH CHECK (is_admin());

-- Admins can manage services
CREATE POLICY "admin_all_services"
  ON services FOR ALL
  USING (is_admin())
  WITH CHECK (is_admin());

-- Admins can manage locations
CREATE POLICY "admin_all_locations"
  ON locations FOR ALL
  USING (is_admin())
  WITH CHECK (is_admin());

-- Admins can manage registration requests
CREATE POLICY "admin_all_registrations"
  ON registration_requests FOR ALL
  USING (is_admin())
  WITH CHECK (is_admin());

-- Admins can manage reviews
CREATE POLICY "admin_all_reviews"
  ON reviews FOR ALL
  USING (is_admin())
  WITH CHECK (is_admin());

-- Admins can view admin_users (but not modify - done via direct SQL)
CREATE POLICY "admin_view_admin_users"
  ON admin_users FOR SELECT
  USING (is_admin());
