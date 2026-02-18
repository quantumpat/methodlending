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
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const payload = await getBody(req)
  if (!payload) {
    return res.status(400).json({ error: 'Invalid payload.' })
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'Anthropic API key not configured.' })
  }

  const { system, messages, max_tokens, model } = payload

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Messages are required.' })
  }

  try {
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
        messages,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return res.status(response.status).json({
        error: 'Anthropic request failed.',
        details: data,
      })
    }

    return res.status(200).json(data)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return res.status(500).json({ error: 'Server error.', message })
  }
}
