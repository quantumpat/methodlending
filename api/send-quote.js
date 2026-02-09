import nodemailer from 'nodemailer'

const getString = (value) => (typeof value === 'string' ? value.trim() : '')

export default async function handler(req, res) {
  console.log('send-quote request', {
    method: req.method,
    hasBody: Boolean(req.body),
  })

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  let payload = req.body
  if (typeof payload === 'string') {
    try {
      payload = JSON.parse(payload)
    } catch {
      console.warn('send-quote invalid JSON payload')
      return res.status(400).json({ error: 'Invalid payload.' })
    }
  }

  const name = getString(payload?.name)
  const phone = getString(payload?.phone)
  const email = getString(payload?.email)
  const propertyAddress = getString(payload?.propertyAddress)
  const purpose = getString(payload?.purpose)
  const loanAmount = getString(payload?.loanAmount)
  const details = getString(payload?.details)

  if (!name || !phone || !email || !purpose) {
    return res.status(400).json({ error: 'Missing required fields.' })
  }

  const smtpHost = process.env.SMTP_HOST
  const smtpPort = Number(process.env.SMTP_PORT ?? 0)
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const smtpFrom = process.env.SMTP_FROM

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    console.error('send-quote SMTP config missing', {
      smtpHostPresent: Boolean(smtpHost),
      smtpPortPresent: Boolean(smtpPort),
      smtpUserPresent: Boolean(smtpUser),
      smtpPassPresent: Boolean(smtpPass),
    })
    return res.status(500).json({ error: 'Email service not configured.' })
  }

  console.log('send-quote SMTP config', {
    host: smtpHost,
    port: smtpPort,
    user: smtpUser,
    from: smtpFrom ?? smtpUser,
  })

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  const recipients = 'aiverson@methodlending.com, mtrotter@methodlending.com'
  const subject = `New quote request - ${name}`
  const text = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Property address: ${propertyAddress || 'N/A'}`,
    `Purpose: ${purpose}`,
    `Loan amount: ${loanAmount || 'N/A'}`,
    `Details: ${details || 'N/A'}`,
  ].join('\n')

  try {
    console.log('send-quote email send attempt', {
      to: recipients,
      subject,
      replyTo: email,
    })
    await transporter.sendMail({
      from: smtpFrom ?? `Method Lending <${smtpUser}>`,
      to: recipients,
      subject,
      text,
      replyTo: email,
    })

    console.log('send-quote email sent')
    return res.status(200).json({ ok: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('Failed to send quote email', {
      message,
      error,
    })
    return res.status(500).json({ error: 'Failed to send email.', message })
  }
}
