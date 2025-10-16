-- Form Submissions Table
CREATE TABLE IF NOT EXISTS form_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  project_type VARCHAR(50),
  budget VARCHAR(50),
  message TEXT,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Email Subscribers Table
CREATE TABLE IF NOT EXISTS email_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  status VARCHAR(50) DEFAULT 'active',
  subscribed_at TIMESTAMP DEFAULT NOW()
);

-- Page Analytics Table
CREATE TABLE IF NOT EXISTS page_analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_url VARCHAR(255),
  visitor_id VARCHAR(255),
  session_id VARCHAR(255),
  referrer VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_form_submissions_status ON form_submissions(status);
CREATE INDEX IF NOT EXISTS idx_form_submissions_created ON form_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_email_subscribers_email ON email_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_page_analytics_created ON page_analytics(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_analytics ENABLE ROW LEVEL SECURITY;

-- Create policies for service role (admin access)
CREATE POLICY "Enable insert for service role" ON form_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read for service role" ON form_submissions
  FOR SELECT USING (true);

CREATE POLICY "Enable insert for service role" ON email_subscribers
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read for service role" ON email_subscribers
  FOR SELECT USING (true);

CREATE POLICY "Enable insert for service role" ON page_analytics
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read for service role" ON page_analytics
  FOR SELECT USING (true);
