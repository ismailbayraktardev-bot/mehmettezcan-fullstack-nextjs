import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

// Rate limiting (simple implementation)
const rateLimit = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimit.get(ip)

  if (!limit || now > limit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + 60000 }) // 1 minute window
    return true
  }

  if (limit.count >= 5) {
    // Max 5 requests per minute
    return false
  }

  limit.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Çok fazla istek gönderildi. Lütfen biraz bekleyin.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, phone, subject, message, service } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Ad, email ve mesaj alanları zorunludur.' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Geçersiz email adresi.' }, { status: 400 })
    }

    // Check if SMTP credentials are configured
    const smtpConfigured =
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASSWORD

    if (!smtpConfigured) {
      console.log('SMTP not configured. Contact form data:', {
        name,
        email,
        phone,
        subject,
        message,
        service,
        timestamp: new Date().toISOString(),
      })

      // In development, log to console instead of sending email
      return NextResponse.json({
        success: true,
        message:
          'Mesajınız alındı! (Demo mode - Email gönderimi yapılandırılmamış)',
      })
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Send email
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: subject || 'Yeni İletişim Formu Mesajı',
      html: `<h2>Yeni İletişim Formu Mesajı</h2>
             <p><strong>Ad Soyad:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
             ${subject ? `<p><strong>Konu:</strong> ${subject}</p>` : ''}
             ${service ? `<p><strong>İlgilenilen Hizmet:</strong> ${service}</p>` : ''}
             <p><strong>Mesaj:</strong></p>
             <p>${message.replace(/\n/g, '<br>')}</p>`,
    })

    return NextResponse.json({
      success: true,
      message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        error:
          'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    endpoint: '/api/contact',
    methods: ['POST'],
  })
}
