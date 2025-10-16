import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/server'
import { Resend } from 'resend'

// Bu route runtime'da çalışır, build time'da değil
export const dynamic = 'force-dynamic'

const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder_key')

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if already subscribed
    const { data: existing } = await supabaseAdmin
      .from('email_subscribers')
      .select('*')
      .eq('email', email)
      .single()

    if (existing) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 400 }
      )
    }

    // Add to Supabase
    const { data, error } = await supabaseAdmin
      .from('email_subscribers')
      .insert([
        {
          email,
          status: 'active',
        },
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Database error' },
        { status: 500 }
      )
    }

    // Send welcome email
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: email,
        subject: 'Bültenimize Hoş Geldiniz!',
        html: `
          <h2>Hoş Geldiniz!</h2>
          <p>Bültenimize abone olduğunuz için teşekkür ederiz.</p>
          <p>Dijital dünyadan haberler ve güncellemeler düzenli olarak e-posta adresinize gönderilecektir.</p>
          <p>Saygılarımızla,<br/>Mehmet Tezcan Dijital Ajans</p>
        `,
      })
    } catch (emailError) {
      console.error('Email error:', emailError)
    }

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error('Newsletter error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
