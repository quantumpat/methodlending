import { Link } from 'react-router-dom'

type WooSenderEmbedProps = {
  title: string
  domain: string
  slug: string
}

const WooSenderEmbed = ({ title, domain, slug }: WooSenderEmbedProps) => (
  <div
    className="flex-grow-1"
    style={{ minWidth: '320px', minHeight: '600px', height: '100%' }}
  >
    <iframe
      title={title}
      src={`${domain}/${slug}`}
      style={{ width: '100%', height: '100%', border: 'none' }}
      loading="lazy"
    />
  </div>
)

const RequestQuotePage = () => {
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
                <WooSenderEmbed
                  title="Method Lending meeting scheduler"
                  domain="https://go.woosender.com"
                  slug="methodlending/methodteam"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card border-0 shadow-sm h-100 quote-form-card quote-panel">
              <div className="card-body p-3 p-md-4 h-100 d-flex flex-column">
                <div className="quote-form-header">
                  <p className="text-uppercase text-primary fw-semibold mb-2">Contact Request</p>
                  <h2 className="h5 fw-bold mb-2">Send a request</h2>
                  <p className="text-muted mb-0">
                    Share a few details and we will reply within one business day.
                  </p>
                  <p className="text-muted small mt-2 mb-0">Method Lending</p>
                </div>
                <WooSenderEmbed
                  title="Method Lending smart form"
                  domain="https://go.woosender.com/smart-form"
                  slug="8n9j-7ok-b6f"
                />
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
