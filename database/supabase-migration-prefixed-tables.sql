-- ================================================================================================
-- SUPABASE MIGRATION: Tables préfixées pour isolation des projets
-- ================================================================================================
-- Date: 2025-12-10
-- Objectif: Dupliquer et préfixer toutes les tables pour séparer PhoenixOS, Bulletin, et Pulse
-- CRITICAL: Pas de tables partagées - chaque projet a ses propres tables isolées
-- ================================================================================================

-- ================================================================================================
-- PARTIE 1: CRÉATION DES TABLES BULLETIN MÉTÉO (Bulletin_*)
-- ================================================================================================

-- Bulletin_weather_alerts
CREATE TABLE IF NOT EXISTS Bulletin_weather_alerts (
    LIKE weather_alerts INCLUDING ALL
);
INSERT INTO Bulletin_weather_alerts SELECT * FROM weather_alerts;

-- Bulletin_weather_cache
CREATE TABLE IF NOT EXISTS Bulletin_weather_cache (
    LIKE weather_cache INCLUDING ALL
);
INSERT INTO Bulletin_weather_cache SELECT * FROM weather_cache;

-- Bulletin_city_photos
CREATE TABLE IF NOT EXISTS Bulletin_city_photos (
    LIKE city_photos INCLUDING ALL
);
INSERT INTO Bulletin_city_photos SELECT * FROM city_photos;

-- Bulletin_user_subscriptions
CREATE TABLE IF NOT EXISTS Bulletin_user_subscriptions (
    LIKE user_subscriptions INCLUDING ALL
);
INSERT INTO Bulletin_user_subscriptions SELECT * FROM user_subscriptions;

-- Bulletin_consent_management
CREATE TABLE IF NOT EXISTS Bulletin_consent_management (
    LIKE consent_management INCLUDING ALL
);
INSERT INTO Bulletin_consent_management SELECT * FROM consent_management;

-- Bulletin_notifications_log
CREATE TABLE IF NOT EXISTS Bulletin_notifications_log (
    LIKE notifications_log INCLUDING ALL
);
INSERT INTO Bulletin_notifications_log SELECT * FROM notifications_log;

-- Bulletin_admin_logs
CREATE TABLE IF NOT EXISTS Bulletin_admin_logs (
    LIKE admin_logs INCLUDING ALL
);
INSERT INTO Bulletin_admin_logs SELECT * FROM admin_logs;


-- ================================================================================================
-- PARTIE 2: CRÉATION DES TABLES PHOENIXOS/LABEX (PhoenixOS_*)
-- ================================================================================================

-- PhoenixOS_injection_scripts
CREATE TABLE IF NOT EXISTS PhoenixOS_injection_scripts (
    LIKE injection_scripts INCLUDING ALL
);
INSERT INTO PhoenixOS_injection_scripts SELECT * FROM injection_scripts;

-- PhoenixOS_marketplace_listings
CREATE TABLE IF NOT EXISTS PhoenixOS_marketplace_listings (
    LIKE marketplace_listings INCLUDING ALL
);
INSERT INTO PhoenixOS_marketplace_listings SELECT * FROM marketplace_listings;

-- PhoenixOS_marketplace_transactions
CREATE TABLE IF NOT EXISTS PhoenixOS_marketplace_transactions (
    LIKE marketplace_transactions INCLUDING ALL
);
INSERT INTO PhoenixOS_marketplace_transactions SELECT * FROM marketplace_transactions;

-- PhoenixOS_profiles
CREATE TABLE IF NOT EXISTS PhoenixOS_profiles (
    LIKE profiles INCLUDING ALL
);
INSERT INTO PhoenixOS_profiles SELECT * FROM profiles;

-- PhoenixOS_profile_files
CREATE TABLE IF NOT EXISTS PhoenixOS_profile_files (
    LIKE profile_files INCLUDING ALL
);
INSERT INTO PhoenixOS_profile_files SELECT * FROM profile_files;

-- PhoenixOS_vm_profiles
CREATE TABLE IF NOT EXISTS PhoenixOS_vm_profiles (
    LIKE vm_profiles INCLUDING ALL
);
INSERT INTO PhoenixOS_vm_profiles SELECT * FROM vm_profiles;

-- PhoenixOS_vm_sessions
CREATE TABLE IF NOT EXISTS PhoenixOS_vm_sessions (
    LIKE vm_sessions INCLUDING ALL
);
INSERT INTO PhoenixOS_vm_sessions SELECT * FROM vm_sessions;

-- PhoenixOS_admin_logs
CREATE TABLE IF NOT EXISTS PhoenixOS_admin_logs (
    LIKE admin_logs INCLUDING ALL
);
INSERT INTO PhoenixOS_admin_logs SELECT * FROM admin_logs;

-- PhoenixOS_consent_management
CREATE TABLE IF NOT EXISTS PhoenixOS_consent_management (
    LIKE consent_management INCLUDING ALL
);
INSERT INTO PhoenixOS_consent_management SELECT * FROM consent_management;

-- PhoenixOS_notifications_log
CREATE TABLE IF NOT EXISTS PhoenixOS_notifications_log (
    LIKE notifications_log INCLUDING ALL
);
INSERT INTO PhoenixOS_notifications_log SELECT * FROM notifications_log;


-- ================================================================================================
-- PARTIE 3: CRÉATION DES TABLES AI-PULSE (Pulse_*)
-- ================================================================================================

-- Pulse_user_subscriptions (pour newsletter AI-Pulse)
CREATE TABLE IF NOT EXISTS Pulse_user_subscriptions (
    LIKE user_subscriptions INCLUDING ALL
);

-- Pulse_consent_management
CREATE TABLE IF NOT EXISTS Pulse_consent_management (
    LIKE consent_management INCLUDING ALL
);

-- Pulse_notifications_log
CREATE TABLE IF NOT EXISTS Pulse_notifications_log (
    LIKE notifications_log INCLUDING ALL
);

-- Pulse_admin_logs
CREATE TABLE IF NOT EXISTS Pulse_admin_logs (
    LIKE admin_logs INCLUDING ALL
);

-- Pulse_tokenized_urls (nouvelle table pour le moteur de tokenisation)
CREATE TABLE IF NOT EXISTS Pulse_tokenized_urls (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    original_url TEXT NOT NULL,
    tokenized_url TEXT NOT NULL,
    platform VARCHAR(50) NOT NULL,
    click_count INT DEFAULT 0,
    revenue DECIMAL(10,2) DEFAULT 0.00,
    last_checked TIMESTAMPTZ,
    status VARCHAR(20) DEFAULT 'active',
    content_hash TEXT,
    is_compromised BOOLEAN DEFAULT FALSE,
    UNIQUE(original_url, platform)
);

-- Pulse_url_health_checks (pour monitoring)
CREATE TABLE IF NOT EXISTS Pulse_url_health_checks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    checked_at TIMESTAMPTZ DEFAULT NOW(),
    url_id UUID REFERENCES Pulse_tokenized_urls(id) ON DELETE CASCADE,
    status_code INT,
    response_time_ms INT,
    content_hash_changed BOOLEAN DEFAULT FALSE,
    is_compromised BOOLEAN DEFAULT FALSE,
    alert_sent BOOLEAN DEFAULT FALSE
);

-- Pulse_newsletter_prospects (base de données prospects, jamais supprimés)
CREATE TABLE IF NOT EXISTS Pulse_newsletter_prospects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    email VARCHAR(255) UNIQUE NOT NULL,
    subscription_token VARCHAR(255) UNIQUE NOT NULL,
    is_subscribed BOOLEAN DEFAULT TRUE,
    unsubscribed_at TIMESTAMPTZ,
    source VARCHAR(100),
    metadata JSONB
);

-- Pulse_daily_ai_content (pour Daily AI Content Generator)
CREATE TABLE IF NOT EXISTS Pulse_daily_ai_content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    news_date DATE NOT NULL,
    news_source TEXT NOT NULL,
    news_title TEXT NOT NULL,
    news_url TEXT NOT NULL,
    instagram_script TEXT,
    linkedin_post TEXT,
    x_thread TEXT,
    generated_image_url TEXT,
    email_sent BOOLEAN DEFAULT FALSE,
    email_sent_at TIMESTAMPTZ
);


-- ================================================================================================
-- PARTIE 4: POLITIQUES RLS (Row Level Security) POUR ISOLATION
-- ================================================================================================

-- Activer RLS sur toutes les tables Bulletin
ALTER TABLE Bulletin_weather_alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE Bulletin_weather_cache ENABLE ROW LEVEL SECURITY;
ALTER TABLE Bulletin_city_photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE Bulletin_user_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE Bulletin_consent_management ENABLE ROW LEVEL SECURITY;
ALTER TABLE Bulletin_notifications_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE Bulletin_admin_logs ENABLE ROW LEVEL SECURITY;

-- Activer RLS sur toutes les tables PhoenixOS
ALTER TABLE PhoenixOS_injection_scripts ENABLE ROW LEVEL SECURITY;
ALTER TABLE PhoenixOS_marketplace_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE PhoenixOS_marketplace_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE PhoenixOS_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE PhoenixOS_profile_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE PhoenixOS_vm_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE PhoenixOS_vm_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE PhoenixOS_admin_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE PhoenixOS_consent_management ENABLE ROW LEVEL SECURITY;
ALTER TABLE PhoenixOS_notifications_log ENABLE ROW LEVEL SECURITY;

-- Activer RLS sur toutes les tables Pulse
ALTER TABLE Pulse_user_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE Pulse_consent_management ENABLE ROW LEVEL SECURITY;
ALTER TABLE Pulse_notifications_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE Pulse_admin_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE Pulse_tokenized_urls ENABLE ROW LEVEL SECURITY;
ALTER TABLE Pulse_url_health_checks ENABLE ROW LEVEL SECURITY;
ALTER TABLE Pulse_newsletter_prospects ENABLE ROW LEVEL SECURITY;
ALTER TABLE Pulse_daily_ai_content ENABLE ROW LEVEL SECURITY;


-- ================================================================================================
-- PARTIE 5: INDEX POUR PERFORMANCE
-- ================================================================================================

-- Index Pulse pour tokenization et monitoring
CREATE INDEX idx_pulse_tokenized_urls_platform ON Pulse_tokenized_urls(platform);
CREATE INDEX idx_pulse_tokenized_urls_status ON Pulse_tokenized_urls(status);
CREATE INDEX idx_pulse_url_health_checks_url_id ON Pulse_url_health_checks(url_id);
CREATE INDEX idx_pulse_newsletter_prospects_email ON Pulse_newsletter_prospects(email);
CREATE INDEX idx_pulse_newsletter_prospects_token ON Pulse_newsletter_prospects(subscription_token);
CREATE INDEX idx_pulse_daily_ai_content_date ON Pulse_daily_ai_content(news_date);


-- ================================================================================================
-- NOTES IMPORTANTES:
-- ================================================================================================
-- 1. Les anciennes tables (non préfixées) sont CONSERVÉES pour migration progressive
-- 2. Pour supprimer les anciennes tables après vérification:
--    DROP TABLE IF EXISTS admin_logs, city_photos, consent_management, etc...
-- 3. Les politiques RLS détaillées doivent être ajoutées selon vos besoins d'authentification
-- 4. Les GitHub Secrets doivent contenir: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
-- 5. Pour addy.io: ADDY_IMAP_HOST, ADDY_IMAP_USER, ADDY_IMAP_PASSWORD, ADDY_SMTP_HOST, etc.
-- ================================================================================================
