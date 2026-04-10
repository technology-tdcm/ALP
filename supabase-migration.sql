-- Supabase Migration: ALP CMS Schema
-- Run this in Supabase SQL Editor to create all tables

-- Users table (admin auth)
CREATE TABLE IF NOT EXISTS users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Leads table (enquiry/contact submissions)
CREATE TABLE IF NOT EXISTS leads (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    course TEXT DEFAULT '',
    university TEXT DEFAULT '',
    message TEXT DEFAULT '',
    source TEXT DEFAULT 'website',
    status TEXT DEFAULT 'new',
    notes TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT DEFAULT '',
    content TEXT NOT NULL,
    category TEXT DEFAULT 'General',
    image_url TEXT DEFAULT '',
    author TEXT DEFAULT 'ALP Team',
    status TEXT DEFAULT 'published',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Programs table
CREATE TABLE IF NOT EXISTS programs (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    level TEXT NOT NULL,
    duration TEXT DEFAULT '',
    fees TEXT DEFAULT '',
    eligibility TEXT DEFAULT '',
    description TEXT DEFAULT '',
    icon TEXT DEFAULT 'fas fa-graduation-cap',
    status TEXT DEFAULT 'active',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Universities table
CREATE TABLE IF NOT EXISTS universities (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    badge TEXT DEFAULT '',
    description TEXT DEFAULT '',
    programs TEXT DEFAULT '',
    logo_url TEXT DEFAULT '',
    status TEXT DEFAULT 'active',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Page content table (editable text for each page)
CREATE TABLE IF NOT EXISTS page_content (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    page TEXT NOT NULL,
    section TEXT NOT NULL,
    content TEXT NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS) - we'll handle auth in the app
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE universities ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_content ENABLE ROW LEVEL SECURITY;

-- Allow public read access for frontend data
CREATE POLICY "Public read blog_posts" ON blog_posts FOR SELECT USING (status = 'published');
CREATE POLICY "Public read programs" ON programs FOR SELECT USING (status = 'active');
CREATE POLICY "Public read universities" ON universities FOR SELECT USING (status = 'active');
CREATE POLICY "Public read page_content" ON page_content FOR SELECT USING (true);

-- Allow public insert for leads (contact form)
CREATE POLICY "Public insert leads" ON leads FOR INSERT WITH CHECK (true);

-- Allow service role full access (used by backend with SUPABASE_SERVICE_ROLE_KEY)
-- Note: The backend uses SUPABASE_SERVICE_ROLE_KEY which bypasses RLS automatically

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_programs_status ON programs(status);
CREATE INDEX IF NOT EXISTS idx_universities_status ON universities(status);
CREATE INDEX IF NOT EXISTS idx_page_content_page ON page_content(page);

-- Auto-update updated_at trigger for leads and blog_posts
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
