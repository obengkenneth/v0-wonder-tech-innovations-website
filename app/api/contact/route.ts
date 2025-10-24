import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Professional email template for WonderTech
    const createEmailTemplate = (isConfirmation = false) => {
      const headerColor = '#2563eb'
      const accentColor = '#1e40af'
      const bgColor = '#f8fafc'
      const borderColor = '#e2e8f0'
      
      if (isConfirmation) {
        return `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank You - WonderTech Innovations</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
              <!-- Header -->
              <div style="background: linear-gradient(135deg, ${headerColor} 0%, ${accentColor} 100%); padding: 40px 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">WonderTech Innovations</h1>
                <p style="color: #e2e8f0; margin: 8px 0 0 0; font-size: 16px;">Empowering Businesses Through Innovation</p>
              </div>
              
              <!-- Content -->
              <div style="padding: 40px 30px;">
                <h2 style="color: ${accentColor}; margin: 0 0 20px 0; font-size: 24px; font-weight: 600;">Thank You for Contacting Us!</h2>
                
                <p style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  Hi ${name},
                </p>
                
                <p style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  Thank you for reaching out to WonderTech Innovations! We've received your message regarding <strong>${subject}</strong> and will get back to you within 24 hours.
                </p>
                
                <div style="background-color: ${bgColor}; border: 1px solid ${borderColor}; border-radius: 12px; padding: 24px; margin: 24px 0;">
                  <h3 style="color: ${accentColor}; margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">Your Message Summary</h3>
                  <p style="color: #475569; font-size: 14px; margin: 0 0 8px 0;"><strong>Subject:</strong> ${subject}</p>
                  <p style="color: #475569; font-size: 14px; margin: 0 0 8px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                  <p style="color: #475569; font-size: 14px; margin: 0;"><strong>Message:</strong></p>
                  <div style="background-color: #ffffff; border: 1px solid ${borderColor}; border-radius: 8px; padding: 16px; margin-top: 8px;">
                    <p style="color: #334155; font-size: 14px; line-height: 1.5; margin: 0; white-space: pre-wrap;">${message}</p>
                  </div>
                </div>
                
                <p style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  In the meantime, feel free to explore our <a href="https://wondertechinnovations.com" style="color: ${headerColor}; text-decoration: none;">portfolio</a> or learn more about our <a href="https://wondertechinnovations.com/services" style="color: ${headerColor}; text-decoration: none;">services</a>.
                </p>
                
                <div style="text-align: center; margin: 32px 0;">
                  <a href="https://wondertechinnovations.com" style="display: inline-block; background: linear-gradient(135deg, ${headerColor} 0%, ${accentColor} 100%); color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 16px;">Visit Our Website</a>
                </div>
              </div>
              
              <!-- Footer -->
              <div style="background-color: ${bgColor}; padding: 30px; text-align: center; border-top: 1px solid ${borderColor};">
                <p style="color: #64748b; font-size: 14px; margin: 0 0 8px 0;">WonderTech Innovations</p>
                <p style="color: #64748b; font-size: 14px; margin: 0 0 8px 0;">Accra, Ghana</p>
                <p style="color: #64748b; font-size: 14px; margin: 0;">
                  <a href="mailto:wondertechinnovations@gmail.com" style="color: ${headerColor}; text-decoration: none;">wondertechinnovations@gmail.com</a> | 
                  <a href="tel:+233594159131" style="color: ${headerColor}; text-decoration: none;">+233 (0) 594159131</a>
                </p>
              </div>
            </div>
          </body>
          </html>
        `
      } else {
        return `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
              <!-- Header -->
              <div style="background: linear-gradient(135deg, ${headerColor} 0%, ${accentColor} 100%); padding: 40px 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">New Contact Form Submission</h1>
                <p style="color: #e2e8f0; margin: 8px 0 0 0; font-size: 16px;">WonderTech Innovations Website</p>
              </div>
              
              <!-- Content -->
              <div style="padding: 40px 30px;">
                <div style="background-color: ${bgColor}; border: 1px solid ${borderColor}; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                  <h3 style="color: ${accentColor}; margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">Contact Details</h3>
                  <p style="color: #475569; font-size: 16px; margin: 0 0 8px 0;"><strong>Name:</strong> ${name}</p>
                  <p style="color: #475569; font-size: 16px; margin: 0 0 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: ${headerColor}; text-decoration: none;">${email}</a></p>
                  <p style="color: #475569; font-size: 16px; margin: 0 0 8px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                  <p style="color: #475569; font-size: 16px; margin: 0;"><strong>Subject:</strong> ${subject}</p>
                </div>
                
                <div style="background-color: ${bgColor}; border: 1px solid ${borderColor}; border-radius: 12px; padding: 24px;">
                  <h3 style="color: ${accentColor}; margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">Message</h3>
                  <div style="background-color: #ffffff; border: 1px solid ${borderColor}; border-radius: 8px; padding: 20px;">
                    <p style="color: #334155; font-size: 16px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                  </div>
                </div>
                
                <div style="text-align: center; margin: 32px 0;">
                  <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, ${headerColor} 0%, ${accentColor} 100%); color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 16px;">Reply to ${name}</a>
                </div>
              </div>
              
              <!-- Footer -->
              <div style="background-color: ${bgColor}; padding: 30px; text-align: center; border-top: 1px solid ${borderColor};">
                <p style="color: #64748b; font-size: 14px; margin: 0;">WonderTech Innovations Contact Form</p>
              </div>
            </div>
          </body>
          </html>
        `
      }
    }

    // Send email to WonderTech
    const adminEmailOptions = {
      from: process.env.GMAIL_USER,
      to: 'wondertechinnovations@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: createEmailTemplate(false),
    }

    // Send confirmation email to the person who submitted the form
    const confirmationEmailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Thank you for contacting WonderTech Innovations - ${subject}`,
      html: createEmailTemplate(true),
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminEmailOptions),
      transporter.sendMail(confirmationEmailOptions)
    ])

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
