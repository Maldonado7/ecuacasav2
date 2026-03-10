-- Fix security vulnerabilities flagged by Supabase Security Advisor
-- 1. Add SET search_path = public to is_admin() SECURITY DEFINER function
-- 2. Enable RLS on analytics_events and contact_logs tables

-- ============================================
-- FIX 1: is_admin() search_path vulnerability
-- ============================================
-- SECURITY DEFINER functions that do not set search_path are vulnerable to
-- privilege escalation via search path manipulation. Adding SET search_path = public
-- ensures the function always resolves objects from the public schema.

CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE email = auth.jwt() ->> 'email'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- ============================================
-- FIX 2: Enable RLS on analytics_events
-- ============================================
-- The analytics_events table was created without RLS enabled,
-- meaning any authenticated or anonymous user could read all analytics data.

ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Admins can view and manage all analytics events
CREATE POLICY "admin_all_analytics_events"
  ON analytics_events FOR ALL
  USING (is_admin())
  WITH CHECK (is_admin());

-- ============================================
-- FIX 3: Enable RLS on contact_logs
-- ============================================
-- The contact_logs table was created without RLS enabled,
-- meaning any authenticated or anonymous user could read all contact log data.

ALTER TABLE contact_logs ENABLE ROW LEVEL SECURITY;

-- Admins can view and manage all contact logs
CREATE POLICY "admin_all_contact_logs"
  ON contact_logs FOR ALL
  USING (is_admin())
  WITH CHECK (is_admin());
