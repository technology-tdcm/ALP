-- Supabase Relational Schema for Program Details
-- Run this in your Supabase SQL Editor

-- 1. Main Details (1-to-1 extension of programs)
CREATE TABLE IF NOT EXISTS program_details (
    program_id UUID PRIMARY KEY REFERENCES programs(id) ON DELETE CASCADE,
    full_name TEXT,
    hero_title TEXT,
    hero_desc TEXT,
    fees_range TEXT,
    about TEXT
);

-- 2. Features (Benefits, Who Should Pursue, Specialisations, Admission Steps)
CREATE TABLE IF NOT EXISTS program_features (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    program_id UUID REFERENCES programs(id) ON DELETE CASCADE,
    type TEXT NOT NULL, -- 'benefit', 'who_should', 'specialization', 'admission_step'
    title TEXT NOT NULL,
    description TEXT,
    icon TEXT,
    sort_order INTEGER DEFAULT 0
);

-- 3. Syllabus
CREATE TABLE IF NOT EXISTS program_syllabus (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    program_id UUID REFERENCES programs(id) ON DELETE CASCADE,
    semester TEXT NOT NULL,
    title TEXT,
    subjects TEXT, -- comma-separated list of subjects
    sort_order INTEGER DEFAULT 0
);

-- 4. Jobs & Salary
CREATE TABLE IF NOT EXISTS program_jobs (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    program_id UUID REFERENCES programs(id) ON DELETE CASCADE,
    role TEXT NOT NULL,
    salary TEXT,
    sort_order INTEGER DEFAULT 0
);

-- 5. FAQs
CREATE TABLE IF NOT EXISTS program_faqs (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    program_id UUID REFERENCES programs(id) ON DELETE CASCADE,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0
);

-- 6. Simple List Items (Skills, Recruiters, Eligibility Criteria)
CREATE TABLE IF NOT EXISTS program_list_items (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    program_id UUID REFERENCES programs(id) ON DELETE CASCADE,
    type TEXT NOT NULL, -- 'skill', 'recruiter', 'eligibility'
    content TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0
);

-- Enable RLS to secure data but allow public reads
ALTER TABLE program_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_syllabus ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_list_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read program_details" ON program_details FOR SELECT USING (true);
CREATE POLICY "Public read program_features" ON program_features FOR SELECT USING (true);
CREATE POLICY "Public read program_syllabus" ON program_syllabus FOR SELECT USING (true);
CREATE POLICY "Public read program_jobs" ON program_jobs FOR SELECT USING (true);
CREATE POLICY "Public read program_faqs" ON program_faqs FOR SELECT USING (true);
CREATE POLICY "Public read program_list_items" ON program_list_items FOR SELECT USING (true);
