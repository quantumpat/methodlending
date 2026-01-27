import { Link } from 'react-router-dom'

const RequestQuotePage = () => (
  <main>
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <p className="text-uppercase text-primary fw-semibold mb-2">
              Request a quote
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
            <form className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <div className="mb-3">
                  <label className="form-label" htmlFor="quote-name">
                    Full name
                  </label>
                  <input
                    className="form-control"
                    id="quote-name"
                    placeholder="Alex Morgan"
                    type="text"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="quote-email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    id="quote-email"
                    placeholder="alex@email.com"
                    type="email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="quote-phone">
                    Phone
                  </label>
                  <input
                    className="form-control"
                    id="quote-phone"
                    placeholder="(555) 123-4567"
                    type="tel"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="quote-type">
                    Loan type
                  </label>
                  <select className="form-select" id="quote-type">
                    <option>Purchase</option>
                    <option>Rehab</option>
                    <option>Bridge</option>
                    <option>Refinance</option>
                    <option>Portfolio</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="quote-amount">
                    Target loan amount
                  </label>
                  <input
                    className="form-control"
                    id="quote-amount"
                    placeholder="$250,000"
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="quote-details">
                    Project details
                  </label>
                  <textarea
                    className="form-control"
                    id="quote-details"
                    rows={4}
                    placeholder="Property address, timeline, and your goals."
                  />
                </div>
                <button className="btn btn-primary w-100" type="submit">
                  Submit request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section className="section bg-light">
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

export default RequestQuotePage
