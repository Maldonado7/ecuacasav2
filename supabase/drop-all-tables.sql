-- Drop all existing tables to start fresh
-- This fixes the broken RLS policies and gives us a clean slate

-- Drop tables in correct order (respecting foreign key constraints)
DROP TABLE IF EXISTS payment_transactions CASCADE;
DROP TABLE IF EXISTS bookings CASCADE;
DROP TABLE IF EXISTS admin_audit_log CASCADE;
DROP TABLE IF EXISTS user_profiles CASCADE;
DROP TABLE IF EXISTS providers CASCADE;
DROP TABLE IF EXISTS services CASCADE;
DROP TABLE IF EXISTS cities CASCADE;
DROP TABLE IF EXISTS neighborhoods CASCADE;

-- Verify all tables are gone
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
AND table_type = 'BASE TABLE';
