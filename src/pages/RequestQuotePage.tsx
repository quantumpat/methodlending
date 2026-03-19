import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

const RequestQuotePage = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    )

    if (existingScript) {
      return
    }

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (submitStatus === 'sending') {
      return
    }

    setSubmitStatus('sending')
    setSubmitMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => [key, String(value).trim()])
    ) as Record<string, string>
    const smsConsent = formData.get('smsConsent') === 'on'

    payload.smsConsent = smsConsent ? 'true' : 'false'
    if (smsConsent) {
      payload.smsConsentTimestamp = new Date().toISOString()
    }

    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setSubmitStatus('success')
      form.reset()
    } catch {
      setSubmitStatus('error')
      setSubmitMessage('We could not send your request. Please try again or email us directly.')
    }
  }

  return (
    <main>
    <section id="request-hero" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <p className="text-uppercase text-primary fw-semibold mb-2">
              Request a Quote
            </p>
            <h1 className="display-5 fw-bold">
              Tell us about your deal. We’ll respond fast.
            </h1>
            <p className="lead text-muted">
              Share a few details and a lending specialist will follow up with
              options tailored to your timeline.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link className="btn btn-outline-primary btn-lg" to="/loan-options">
                View loan options
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="request-connect" className="section bg-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <div className="card border-0 shadow-sm h-100 quote-panel">
              <div className="card-body p-3 p-md-4 h-100 d-flex flex-column">
                <h2 className="h5 fw-bold mb-3">Schedule a meeting</h2>
                <div
                  className="calendly-inline-widget flex-grow-1"
                  data-url="https://calendly.com/aiverson-methodlending/discovery-call"
                  style={{ minWidth: '320px', height: '100%' }}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card border-0 shadow-sm h-100 quote-form-card quote-panel">
              <div className="card-body p-3 p-md-4 h-100 d-flex flex-column">
                <div className="quote-form-header">
                  <p className="text-uppercase text-primary fw-semibold mb-2">Email request</p>
                  <h2 className="h5 fw-bold mb-2">Email Us Instead (Form)</h2>
                  <p className="text-muted mb-0">
                    Share a few details and we will reply within one business day.
                  </p>
                  <p className="text-muted small mt-2 mb-0">Method Lending</p>
                </div>
                <form className="d-flex flex-column flex-grow-1 quote-form" onSubmit={handleSubmit}>
                  <div className="quote-form-section">
                    <div className="quote-form-section__title">Contact</div>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="quote-first-name">
                          First name{' '}
                          <span className="required-asterisk" aria-hidden="true">*</span>
                          <span className="visually-hidden">required</span>
                        </label>
                        <input
                          className="form-control"
                          id="quote-first-name"
                          name="firstName"
                          placeholder="Alex"
                          type="text"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="quote-last-name">
                          Last name{' '}
                          <span className="required-asterisk" aria-hidden="true">*</span>
                          <span className="visually-hidden">required</span>
                        </label>
                        <input
                          className="form-control"
                          id="quote-last-name"
                          name="lastName"
                          placeholder="Morgan"
                          type="text"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="quote-phone">
                          Phone (optional)
                        </label>
                        <input
                          className="form-control"
                          id="quote-phone"
                          name="phone"
                          placeholder="(555) 123-4567"
                          type="tel"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="form-label" htmlFor="quote-email">
                          Email{' '}
                          <span className="required-asterisk" aria-hidden="true">*</span>
                          <span className="visually-hidden">required</span>
                        </label>
                        <input
                          className="form-control"
                          id="quote-email"
                          name="email"
                          placeholder="alex@email.com"
                          type="email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="quote-form-section">
                    <div className="quote-form-section__title">Loan details</div>
                    <div className="row g-3">
                      <div className="col-12">
                        <label className="form-label" htmlFor="quote-address">
                          Property address (optional)
                        </label>
                        <input
                          className="form-control"
                          id="quote-address"
                          name="propertyAddress"
                          placeholder="123 Main St, San Juan Capistrano, CA"
                          type="text"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="quote-purpose">
                          Loan purpose{' '}
                          <span className="required-asterisk" aria-hidden="true">*</span>
                          <span className="visually-hidden">required</span>
                        </label>
                        <select
                          className="form-select"
                          id="quote-purpose"
                          name="purpose"
                          required
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select purchase or refinance
                          </option>
                          <option value="purchase">Purchase</option>
                          <option value="refinance">Refinance</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="quote-amount">
                          Loan amount sought (optional)
                        </label>
                        <input
                          className="form-control"
                          id="quote-amount"
                          name="loanAmount"
                          placeholder="$350,000"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="quote-form-section quote-form-section--grow">
                    <div className="quote-form-section__title">Notes</div>
                    <label className="form-label" htmlFor="quote-message">
                      Details
                    </label>
                    <textarea
                      className="form-control flex-grow-1"
                      id="quote-message"
                      name="details"
                      placeholder="Property type, timeline, and any special circumstances."
                      style={{ resize: 'none', overflowY: 'auto' }}
                    />
                  </div>
                  <div className="quote-form-section">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        id="sms-consent"
                        name="smsConsent"
                        type="checkbox"
                      />
                      <label className="form-check-label" htmlFor="sms-consent">
                        By checking this box, you agree to receive SMS messages from Method Lending related to loan inquiries, application updates, and customer support. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for assistance.
                      </label>
                    </div>
                    <p className="small text-muted mt-2 mb-0">
                      SMS consent applies only to the email form, not the Calendly scheduler.
                    </p>
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        id="terms-privacy"
                        name="termsPrivacy"
                        type="checkbox"
                        required
                      />
                      <label className="form-check-label" htmlFor="terms-privacy">
                        By checking, I accept <a href="/terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Service</a> {' & '}
                        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary w-100 mt-3"
                    type="submit"
                    disabled={submitStatus === 'sending'}
                  >
                    {submitStatus === 'sending' ? 'Sending...' : 'Send email'}
                  </button>
                  {submitStatus === 'success' && (
                    <p className="text-success mt-3 mb-0" role="status">
                      Thanks! We received your request and will reply within one business day.
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-danger mt-3 mb-0" role="alert">
                      {submitMessage}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  )
}

export default RequestQuotePage
