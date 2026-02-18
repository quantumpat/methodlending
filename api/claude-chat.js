const getBody = async (req) => {
  if (req.body && typeof req.body !== 'string') {
    return req.body
  }

  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body)
    } catch {
      return null
    }
  }

  return null
}

export default async function handler(req, res) {
  const requestId = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed', requestId })
  }

  const payload = await getBody(req)
  if (!payload) {
    return res.status(400).json({ error: 'Invalid payload.', requestId })
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'Anthropic API key not configured.', requestId })
  }

  const { system, messages, max_tokens, model } = payload

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Messages are required.', requestId })
  }

  try {
    const sanitizedMessages = messages.map((message) => ({
      role: message?.role,
      content: message?.content,
    }))

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: model || 'claude-sonnet-4-20250514',
        max_tokens: Number.isFinite(max_tokens) ? max_tokens : 1000,
        system: typeof system === 'string' ? system : '',
        messages: sanitizedMessages,
      }),
    })

    const contentType = response.headers.get('content-type') || ''
    const isJson = contentType.includes('application/json')
    const data = isJson ? await response.json() : await response.text()

    if (!response.ok) {
      return res.status(response.status).json({
        error: 'Anthropic request failed.',
        details: data,
        requestId,
      })
    }

    return res.status(200).json({ ...data, requestId })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return res.status(500).json({ error: 'Server error.', message, requestId })
  }
}
