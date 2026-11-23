import { useEffect } from 'react'

const FORM_IFRAME_ID = 'inline-U8aJhSFaofCQPUowojHC'
const CALENDAR_IFRAME_ID = '6Q8mdj3PWaajnwQPSB2Q_website'
const CALENDAR_ID = '6Q8mdj3PWaajnwQPSB2Q'
const FORM_EMBED_SCRIPT_ID = 'ghl-form-embed'

const isGhlOrigin = (origin: string) => {
  let hostname: string
  try {
    hostname = new URL(origin).hostname
  } catch {
    return false
  }
  return (
    hostname === 'leadconnectorhq.com' ||
    hostname === 'msgsndr.com' ||
    hostname.endsWith('.leadconnectorhq.com') ||
    hostname.endsWith('.msgsndr.com')
  )
}

// In-memory flags back up sessionStorage, which can be unavailable (private mode, blocked storage)
const leadsSent: Record<string, boolean> = {}

const trackLeadOnce = (storageKey: string, contentName: string) => {
  if (leadsSent[storageKey]) return false
  try {
    if (window.sessionStorage.getItem(storageKey)) {
      leadsSent[storageKey] = true
      return false
    }
    window.sessionStorage.setItem(storageKey, '1')
  } catch {
    // Storage unavailable: the in-memory flag still dedupes within this page load
  }
  leadsSent[storageKey] = true
  window.fbq?.('track', 'Lead', { content_name: contentName }, { eventID: crypto.randomUUID() })
  return true
}

const iframeWindow = (id: string) =>
  (document.getElementById(id) as HTMLIFrameElement | null)?.contentWindow

// Reads only the action name (e.data[0]) and, for bookings, the calendar id. The rest of the
// message can hold the visitor's contact details and is never read, stored, or logged.
const handleGhlMessage = (event: MessageEvent) => {
  if (!isGhlOrigin(event.origin) || !Array.isArray(event.data)) return

  const action: unknown = event.data[0]
  let leadFired = false

  if (action === 'set-sticky-contacts' && event.source && event.source === iframeWindow(FORM_IFRAME_ID)) {
    leadFired = trackLeadOnce('ml_lead_form', 'website_form')
  } else if (
    action === 'msgsndr-booking-complete' &&
    event.source &&
    event.source === iframeWindow(CALENDAR_IFRAME_ID)
  ) {
    const details: unknown = event.data[1]
    const calendarId =
      details && typeof details === 'object' ? (details as { calendarId?: unknown }).calendarId : undefined
    if (calendarId === undefined || calendarId === CALENDAR_ID) {
      leadFired = trackLeadOnce('ml_lead_booking', 'website_booking')
    }
  }

  if (new URLSearchParams(window.location.search).get('pixel_debug') === '1') {
    console.info('[pixel_debug]', typeof action === 'string' ? action : '(non-string action)', { leadFired })
  }
}

const RequestQuotePage = () => {
  useEffect(() => {
    // Loaded once for the whole session; it sizes GHL iframes that mount on later visits too
    if (document.getElementById(FORM_EMBED_SCRIPT_ID) === null) {
      const script = document.createElement('script')
      script.id = FORM_EMBED_SCRIPT_ID
      script.src = 'https://link.msgsndr.com/js/form_embed.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('message', handleGhlMessage)
    return () => window.removeEventListener('message', handleGhlMessage)
  }, [])

  return (
    <main>
      <section id="request-hero" className="hero-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <p className="text-uppercase text-primary fw-semibold mb-2">Request a Quote</p>
              <h1 className="display-5 fw-bold">Tell us about your deal, or book a 20-minute call.</h1>
              <p className="lead text-muted">Use the form or the calendar below.</p>
            </div>
          </div>

          <div className="row g-4 mt-2">
            <div className="col-12 col-lg-6" style={{ minHeight: '640px' }}>
              <h2 className="h4 fw-semibold mb-3">Have us reach out</h2>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/U8aJhSFaofCQPUowojHC"
                id="inline-U8aJhSFaofCQPUowojHC"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website Quote Form"
                data-layout-iframe-id="inline-U8aJhSFaofCQPUowojHC"
                data-form-id="U8aJhSFaofCQPUowojHC"
                title="Website Quote Form"
              ></iframe>
            </div>
            <div className="col-12 col-lg-6" style={{ minHeight: '640px' }}>
              <h2 className="h4 fw-semibold mb-3">Pick a time for a 20-minute call</h2>
              <iframe
                src="https://api.leadconnectorhq.com/widget/bookings/website-method-lending"
                id="6Q8mdj3PWaajnwQPSB2Q_website"
                title="Call with Method Lending"
                style={{ width: '100%', border: 'none', overflow: 'hidden' }}
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default RequestQuotePage
