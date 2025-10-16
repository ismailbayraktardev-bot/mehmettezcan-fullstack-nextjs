// Database Types
export interface FormSubmission {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  project_type?: string
  budget?: string
  message?: string
  status: 'new' | 'contacted' | 'closed'
  created_at: string
}

export interface EmailSubscriber {
  id: string
  email: string
  status: 'active' | 'unsubscribed'
  subscribed_at: string
}

export interface PageAnalytics {
  id: string
  page_url: string
  visitor_id?: string
  session_id?: string
  referrer?: string
  created_at: string
}
