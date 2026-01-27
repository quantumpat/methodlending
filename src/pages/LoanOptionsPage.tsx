import { Link } from 'react-router-dom'

const LoanOptionsPage = () => (
  <main>
    <section id="loan-options-hero" className="hero-section hero-section--image hero-section--image-house-2">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <p className="text-uppercase text-primary fw-semibold mb-2">
              Loan options
            </p>
            <h1 className="display-5 fw-bold">
              Find the right structure for every investment
            </h1>
            <p className="lead text-muted">
              Compare products designed for acquisitions, rehabs, bridge needs,
              and portfolio growth.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-primary btn-lg" href="/#contact">
                Request a Quote
              </a>
              <Link className="btn btn-outline-primary btn-lg" to="/request-quote">
                Request a Quote
              </Link>
              <a className="btn btn-outline-primary btn-lg" href="/purchase">
                Start a purchase request
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-card p-4 p-md-5">
              <h2 className="h4 fw-semibold mb-3">Quick comparison</h2>
              <ul className="list-unstyled mb-0">
                <li className="d-flex align-items-start gap-3 mb-3">
                  <span className="badge bg-primary-subtle text-primary">A</span>
                  <div>
                    <strong>Acquisition</strong>
                    <p className="text-muted mb-0">
                      Fast close, high leverage, minimal documentation.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <span className="badge bg-primary-subtle text-primary">R</span>
                  <div>
                    <strong>Rehab</strong>
                    <p className="text-muted mb-0">
                      Draw-based funding with clear milestone reviews.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="badge bg-primary-subtle text-primary">B</span>
                  <div>
                    <strong>Bridge</strong>
                    <p className="text-muted mb-0">
                      Short-term flexibility for timing gaps or refinances.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="loan-options-compare" className="section bg-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h5">Acquisition loans</h3>
                <p className="text-muted">
                  High leverage for quick closings and competitive offers.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>Up to 85% LTV</li>
                  <li>Close in 7 days</li>
                  <li>Rates from 9.5%</li>
                </ul>
                <a className="btn btn-link p-0" href="/purchase">
                  Start purchase
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h5">Rehab financing</h3>
                <p className="text-muted">
                  Draw schedules with clear scopes and inspections.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>Up to 90% LTC</li>
                  <li>Same-week draws</li>
                  <li>Flexible scopes</li>
                </ul>
                <a className="btn btn-link p-0" href="/purchase">
                  Explore rehab
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h5">Bridge loans</h3>
                <p className="text-muted">
                  Short-term options for timing gaps and refinances.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>12-24 month terms</li>
                  <li>Interest-only</li>
                  <li>Fast approvals</li>
                </ul>
                <a className="btn btn-link p-0" href="/refinance">
                  Bridge details
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h5">Portfolio support</h3>
                <p className="text-muted">
                  Scalable financing for repeat investors and growing teams.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>Cross-collateral</li>
                  <li>Custom pricing</li>
                  <li>Dedicated PM</li>
                </ul>
                <a className="btn btn-link p-0" href="/#contact">
                  Talk to us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Link className="btn btn-primary" to="/request-quote">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  </main>
)

export default LoanOptionsPage
