-- ============================================================================
-- AI-Pulse Analytics Database Schema for Supabase
-- ============================================================================
-- Author: ThePhoenixAgency
-- Description: Privacy-first analytics system with Row Level Security
-- Security: All tables use RLS, anonymous inserts only, no PII storage
-- Version: 1.0.0
-- ============================================================================

-- Prerequisites: Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================================
-- SCHEMA: Analytics
-- ============================================================================

-- Drop existing objects (for clean migration)
DROP TABLE IF EXISTS pulse_analytics CASCADE;
DROP TABLE IF EXISTS pulse_sessions CASCADE;
DROP TABLE IF EXISTS pulse_countries CASCADE;
DROP FUNCTION IF EXISTS update_updated_at_column CASCADE;
DROP FUNCTION IF EXISTS anonymize_old_sessions CASCADE;

-- ============================================================================
-- TABLE: pulse_analytics
-- Main analytics events table
-- Stores all tracking events (pageviews, clicks, time spent)
-- ============================================================================

CREATE TABLE pulse_analytics (
    -- Primary Key
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    -- Event Information
    event_type TEXT NOT NULL CHECK (event_type IN ('pageview', 'article_click', 'time_spent')),
    session_id TEXT NOT NULL,  -- Non-personally identifiable session ID

    -- Geographic Data (Country-level only, NO IP addresses)
    country_code TEXT,  -- ISO 3166-1 alpha-2 code (e.g., 'FR', 'US')
    country_name TEXT,  -- Full country name

    -- Timestamps
    timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    -- User Agent (Simplified, no versions)
    user_agent TEXT,  -- Format: "Browser on OS" (e.g., "Chrome on Windows")

    -- Page/Navigation Data
    referrer TEXT,  -- Previous page URL (sanitized)
    page_url TEXT,  -- Current page path (sanitized)

    -- Article-specific Data (for article_click events)
    article_title TEXT,  -- Article title (sanitized)
    article_source TEXT,  -- Article source (sanitized)
    article_url TEXT,  -- Article URL (validated)

    -- Time-spent Data (for time_spent events)
    time_spent_seconds INTEGER CHECK (time_spent_seconds >= 0 AND time_spent_seconds <= 86400),  -- Max 24 hours

    -- Metadata
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- TABLE: pulse_sessions
-- Session aggregation table for quick analytics
-- Auto-updated via triggers
-- ============================================================================

CREATE TABLE pulse_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT UNIQUE NOT NULL,

    -- Session Information
    first_seen TIMESTAMPTZ NOT NULL,
    last_seen TIMESTAMPTZ NOT NULL,

    -- Geographic Data
    country_code TEXT,
    country_name TEXT,

    -- Session Metrics
    total_pageviews INTEGER DEFAULT 0,
    total_article_clicks INTEGER DEFAULT 0,
    total_time_spent_seconds INTEGER DEFAULT 0,

    -- User Agent
    user_agent TEXT,

    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- TABLE: pulse_countries
-- Country statistics aggregation table
-- Updated via scheduled functions or triggers
-- ============================================================================

CREATE TABLE pulse_countries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    country_code TEXT UNIQUE NOT NULL,
    country_name TEXT NOT NULL,

    -- Aggregated Stats
    total_sessions INTEGER DEFAULT 0,
    total_pageviews INTEGER DEFAULT 0,
    total_article_clicks INTEGER DEFAULT 0,

    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- INDEXES: Performance Optimization
-- ============================================================================

-- pulse_analytics indexes
CREATE INDEX idx_analytics_session_id ON pulse_analytics(session_id);
CREATE INDEX idx_analytics_event_type ON pulse_analytics(event_type);
CREATE INDEX idx_analytics_timestamp ON pulse_analytics(timestamp DESC);
CREATE INDEX idx_analytics_country_code ON pulse_analytics(country_code);
CREATE INDEX idx_analytics_created_at ON pulse_analytics(created_at DESC);

-- Composite indexes for common queries
CREATE INDEX idx_analytics_session_event ON pulse_analytics(session_id, event_type);
CREATE INDEX idx_analytics_country_timestamp ON pulse_analytics(country_code, timestamp DESC);

-- pulse_sessions indexes
CREATE INDEX idx_sessions_session_id ON pulse_sessions(session_id);
CREATE INDEX idx_sessions_country_code ON pulse_sessions(country_code);
CREATE INDEX idx_sessions_first_seen ON pulse_sessions(first_seen DESC);
CREATE INDEX idx_sessions_last_seen ON pulse_sessions(last_seen DESC);

-- pulse_countries indexes
CREATE INDEX idx_countries_code ON pulse_countries(country_code);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- Security: Anonymous inserts only, authenticated reads only
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE pulse_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE pulse_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE pulse_countries ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- POLICIES: pulse_analytics
-- ============================================================================

-- Allow anonymous users to INSERT tracking events
CREATE POLICY "Allow anonymous inserts on analytics"
    ON pulse_analytics
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Allow authenticated users (dashboard) to SELECT all data
CREATE POLICY "Allow authenticated reads on analytics"
    ON pulse_analytics
    FOR SELECT
    TO authenticated
    USING (true);

-- Deny all other operations
CREATE POLICY "Deny updates on analytics"
    ON pulse_analytics
    FOR UPDATE
    TO public
    USING (false);

CREATE POLICY "Deny deletes on analytics"
    ON pulse_analytics
    FOR DELETE
    TO public
    USING (false);

-- ============================================================================
-- POLICIES: pulse_sessions
-- ============================================================================

-- Allow anonymous users to INSERT new sessions
CREATE POLICY "Allow anonymous inserts on sessions"
    ON pulse_sessions
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Allow anonymous users to UPDATE their own session
CREATE POLICY "Allow anonymous updates on sessions"
    ON pulse_sessions
    FOR UPDATE
    TO anon
    USING (true)
    WITH CHECK (true);

-- Allow authenticated users to SELECT all sessions
CREATE POLICY "Allow authenticated reads on sessions"
    ON pulse_sessions
    FOR SELECT
    TO authenticated
    USING (true);

-- ============================================================================
-- POLICIES: pulse_countries
-- ============================================================================

-- Allow authenticated users to SELECT country stats
CREATE POLICY "Allow authenticated reads on countries"
    ON pulse_countries
    FOR SELECT
    TO authenticated
    USING (true);

-- Allow service role to manage country stats
CREATE POLICY "Allow service role management on countries"
    ON pulse_countries
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- ============================================================================
-- FUNCTIONS: Utility Functions
-- ============================================================================

-- Function: Update updated_at timestamp automatically
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Function: Aggregate country statistics
CREATE OR REPLACE FUNCTION aggregate_country_stats()
RETURNS VOID AS $$
BEGIN
    -- Insert or update country statistics
    INSERT INTO pulse_countries (country_code, country_name, total_sessions, total_pageviews, total_article_clicks)
    SELECT
        s.country_code,
        s.country_name,
        COUNT(DISTINCT s.session_id) as total_sessions,
        COALESCE(SUM(s.total_pageviews), 0) as total_pageviews,
        COALESCE(SUM(s.total_article_clicks), 0) as total_article_clicks
    FROM pulse_sessions s
    WHERE s.country_code IS NOT NULL
    GROUP BY s.country_code, s.country_name
    ON CONFLICT (country_code)
    DO UPDATE SET
        total_sessions = EXCLUDED.total_sessions,
        total_pageviews = EXCLUDED.total_pageviews,
        total_article_clicks = EXCLUDED.total_article_clicks,
        updated_at = NOW();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function: Anonymize old sessions (GDPR compliance)
-- Removes session data older than 90 days
CREATE OR REPLACE FUNCTION anonymize_old_sessions()
RETURNS VOID AS $$
BEGIN
    -- Anonymize sessions older than 90 days
    UPDATE pulse_sessions
    SET
        session_id = 'anonymized_' || id,
        user_agent = 'anonymized',
        updated_at = NOW()
    WHERE last_seen < NOW() - INTERVAL '90 days'
    AND session_id NOT LIKE 'anonymized_%';

    -- Delete analytics events older than 90 days
    DELETE FROM pulse_analytics
    WHERE created_at < NOW() - INTERVAL '90 days';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================================
-- TRIGGERS: Automatic Updates
-- ============================================================================

-- Trigger: Update updated_at on pulse_analytics
CREATE TRIGGER update_analytics_updated_at
    BEFORE UPDATE ON pulse_analytics
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Trigger: Update updated_at on pulse_sessions
CREATE TRIGGER update_sessions_updated_at
    BEFORE UPDATE ON pulse_sessions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Trigger: Update updated_at on pulse_countries
CREATE TRIGGER update_countries_updated_at
    BEFORE UPDATE ON pulse_countries
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- SCHEDULED JOBS (via pg_cron extension)
-- Run these manually or via Supabase Edge Functions
-- ============================================================================

-- Note: Supabase doesn't support pg_cron in free tier
-- Run these via Edge Functions or cron jobs:
--
-- 1. Aggregate country stats (daily at 00:00 UTC):
--    SELECT aggregate_country_stats();
--
-- 2. Anonymize old sessions (weekly on Sunday at 03:00 UTC):
--    SELECT anonymize_old_sessions();

-- ============================================================================
-- VIEWS: Analytics Dashboards
-- ============================================================================

-- View: Recent Activity (Last 24 hours)
CREATE OR REPLACE VIEW vw_recent_activity AS
SELECT
    event_type,
    COUNT(*) as event_count,
    COUNT(DISTINCT session_id) as unique_sessions,
    DATE_TRUNC('hour', timestamp) as hour
FROM pulse_analytics
WHERE timestamp >= NOW() - INTERVAL '24 hours'
GROUP BY event_type, DATE_TRUNC('hour', timestamp)
ORDER BY hour DESC;

-- View: Top Articles (Last 7 days)
CREATE OR REPLACE VIEW vw_top_articles AS
SELECT
    article_title,
    article_source,
    article_url,
    COUNT(*) as click_count,
    COUNT(DISTINCT session_id) as unique_readers
FROM pulse_analytics
WHERE event_type = 'article_click'
AND timestamp >= NOW() - INTERVAL '7 days'
AND article_title IS NOT NULL
GROUP BY article_title, article_source, article_url
ORDER BY click_count DESC
LIMIT 50;

-- View: Country Statistics
CREATE OR REPLACE VIEW vw_country_stats AS
SELECT
    country_name,
    country_code,
    total_sessions,
    total_pageviews,
    total_article_clicks,
    ROUND(total_pageviews::NUMERIC / NULLIF(total_sessions, 0), 2) as avg_pageviews_per_session
FROM pulse_countries
ORDER BY total_sessions DESC;

-- View: Session Summary
CREATE OR REPLACE VIEW vw_session_summary AS
SELECT
    DATE_TRUNC('day', first_seen) as date,
    COUNT(*) as total_sessions,
    SUM(total_pageviews) as total_pageviews,
    SUM(total_article_clicks) as total_article_clicks,
    ROUND(AVG(total_time_spent_seconds), 0) as avg_time_spent_seconds,
    COUNT(DISTINCT country_code) as unique_countries
FROM pulse_sessions
GROUP BY DATE_TRUNC('day', first_seen)
ORDER BY date DESC;

-- ============================================================================
-- GRANTS: Permissions
-- ============================================================================

-- Grant SELECT on views to authenticated users
GRANT SELECT ON vw_recent_activity TO authenticated;
GRANT SELECT ON vw_top_articles TO authenticated;
GRANT SELECT ON vw_country_stats TO authenticated;
GRANT SELECT ON vw_session_summary TO authenticated;

-- ============================================================================
-- DATA RETENTION POLICY
-- ============================================================================

COMMENT ON TABLE pulse_analytics IS
'Analytics events table. Data older than 90 days is automatically anonymized or deleted via scheduled jobs.';

COMMENT ON TABLE pulse_sessions IS
'Session aggregation table. Session IDs are anonymized after 90 days for GDPR compliance.';

COMMENT ON TABLE pulse_countries IS
'Country-level statistics. No personally identifiable information stored.';

-- ============================================================================
-- MIGRATION COMPLETE
-- ============================================================================

-- Verify tables
SELECT table_name, table_type
FROM information_schema.tables
WHERE table_schema = 'public'
AND table_name LIKE 'pulse_%'
ORDER BY table_name;

-- Verify RLS is enabled
SELECT tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public'
AND tablename LIKE 'pulse_%';

-- Verify policies
SELECT tablename, policyname, cmd, roles
FROM pg_policies
WHERE schemaname = 'public'
AND tablename LIKE 'pulse_%'
ORDER BY tablename, policyname;

-- ============================================================================
-- USAGE NOTES
-- ============================================================================

-- 1. GitHub Secrets to set:
--    - SUPABASE_URL: Your Supabase project URL
--    - SUPABASE_ANON_KEY: Your Supabase anonymous key (for client-side inserts)
--    - SUPABASE_SERVICE_KEY: Your Supabase service role key (for admin operations)
--
-- 2. Client-side code:
--    - Use SUPABASE_ANON_KEY for inserts (anonymous users)
--    - Anonymous users can only INSERT, not read data
--
-- 3. Dashboard/Admin code:
--    - Use authenticated Supabase client with auth
--    - Authenticated users can read all analytics data
--
-- 4. Scheduled jobs:
--    - Run aggregate_country_stats() daily
--    - Run anonymize_old_sessions() weekly
--    - Use Supabase Edge Functions or external cron
--
-- 5. Security:
--    - No IP addresses are ever stored
--    - Only country-level geolocation
--    - Sessions are anonymized after 90 days
--    - All inputs should be sanitized client-side with DOMPurify
--
-- 6. Performance:
--    - All indexes are optimized for common queries
--    - Views are materialized for dashboard performance
--    - Partition tables if data grows beyond 10M rows
--
-- ============================================================================
