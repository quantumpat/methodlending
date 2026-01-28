import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const RequestQuotePage = () => {
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
              <a className="btn btn-link px-0" href="/#contact">
                Prefer email? Contact us
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-3 p-md-4">
                <h2 className="h5 fw-bold mb-3">Schedule a meeting</h2>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/d/cxnp-zp2-b7w/15-minute-meeting?hide_gdpr_banner=1&primary_color=3274d2"
                  style={{ minWidth: '320px', height: '700px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="request-next" className="section bg-light">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-7">
            <h2 className="h3 fw-bold">What happens next?</h2>
            <p className="text-muted mb-0">
              We review your submission within one business day, confirm any
              missing details, and send back a term summary and next steps.
            </p>
          </div>
          <div className="col-lg-5 text-lg-end">
            <Link className="btn btn-primary btn-lg" to="/purchase">
              Start with purchase loans
            </Link>
          </div>
        </div>
      </div>
    </section>
    </main>
  )
}

export default RequestQuotePage
