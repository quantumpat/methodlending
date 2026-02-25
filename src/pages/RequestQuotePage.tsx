import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const RequestQuotePage = () => {
  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://app.woosender.com/assets/script/woo-calendar.js"]'
    )

    if (existingScript) {
      return
    }

    const script = document.createElement('script')
    script.src = 'https://app.woosender.com/assets/script/woo-calendar.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

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
              <div className="card-body p-3 p-md-4">
                <h2 className="h5 fw-bold mb-3">Schedule a meeting</h2>
                <div
                  className="woo-calendar-iframe-container"
                  id="woo-calendar-iframe-container"
                  data-slug="methodlending/methodteam"
                  data-domain="https://go.woosender.com"
                  style={{ minWidth: '320px', height: '600px' }}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card border-0 shadow-sm h-100 quote-form-card quote-panel">
              <div className="card-body p-3 p-md-4 h-100 d-flex flex-column">
                <div className="quote-form-header">
                  <p className="text-uppercase text-primary fw-semibold mb-2">Email request</p>
                  <h2 className="h5 fw-bold mb-2">Email us instead</h2>
                  <p className="text-muted mb-0">
                    Share a few details and we will reply within one business day.
                  </p>
                </div>
                <div className="d-flex flex-column flex-grow-1 quote-form">
                  <div
                    className="woo-calendar-iframe-container"
                    id="woo-calendar-iframe-container"
                    data-slug="8n9j-7ok-b6f"
                    data-domain="https://go.woosender.com/smart-form"
                    style={{ minWidth: '320px', height: '600px' }}
                  />
                </div>
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
