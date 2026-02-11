import nodemailer from 'nodemailer'

const getString = (value) => (typeof value === 'string' ? value.trim() : '')
const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

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
  const purposeLabel =
    purpose === 'purchase' ? 'Purchase' : purpose === 'refinance' ? 'Refinance' : purpose || 'N/A'
  const subject = `New quote request - ${name}`
  const text = [
    'New quote request',
    '',
    'Contact',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    '',
    'Loan details',
    `Purpose: ${purposeLabel}`,
    `Loan amount: ${loanAmount || 'N/A'}`,
    `Property address: ${propertyAddress || 'N/A'}`,
    '',
    'Notes',
    `${details || 'N/A'}`,
  ].join('\n')

  const html = `
    <div style="background:#f3f6fb;padding:24px 0;font-family:'Segoe UI',Arial,sans-serif;color:#0f172a;">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
          <td align="center">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="620" style="width:620px;max-width:92%;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
              <tr>
                <td style="padding:24px 28px;background:linear-gradient(135deg,#e6eff7 0%,#ffffff 70%);">
                  <div style="text-transform:uppercase;letter-spacing:2px;font-size:11px;color:#0d4e87;font-weight:700;">Method Lending</div>
                  <div style="font-size:22px;font-weight:700;margin-top:8px;">New quote request</div>
                  <div style="font-size:14px;color:#475569;margin-top:6px;">Reply directly to contact the client.</div>
                </td>
              </tr>
              <tr>
                <td style="padding:22px 28px;">
                  <div style="font-size:13px;text-transform:uppercase;letter-spacing:1.6px;color:#0d4e87;font-weight:700;margin-bottom:10px;">Contact</div>
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="font-size:14px;">
                    <tr>
                      <td style="padding:6px 0;color:#64748b;width:160px;">Name</td>
                      <td style="padding:6px 0;font-weight:600;">${escapeHtml(name)}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;color:#64748b;">Phone</td>
                      <td style="padding:6px 0;font-weight:600;">${escapeHtml(phone)}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;color:#64748b;">Email</td>
                      <td style="padding:6px 0;font-weight:600;">${escapeHtml(email)}</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:0 28px 22px;">
                  <div style="font-size:13px;text-transform:uppercase;letter-spacing:1.6px;color:#0d4e87;font-weight:700;margin-bottom:10px;">Loan details</div>
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="font-size:14px;">
                    <tr>
                      <td style="padding:6px 0;color:#64748b;width:160px;">Purpose</td>
                      <td style="padding:6px 0;font-weight:600;">${escapeHtml(purposeLabel)}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;color:#64748b;">Loan amount</td>
                      <td style="padding:6px 0;font-weight:600;">${escapeHtml(loanAmount || 'N/A')}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;color:#64748b;">Property address</td>
                      <td style="padding:6px 0;font-weight:600;">${escapeHtml(propertyAddress || 'N/A')}</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:0 28px 26px;">
                  <div style="font-size:13px;text-transform:uppercase;letter-spacing:1.6px;color:#0d4e87;font-weight:700;margin-bottom:10px;">Notes</div>
                  <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px;font-size:14px;line-height:1.6;color:#0f172a;">
                    ${escapeHtml(details || 'N/A')}
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `

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
      html,
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
