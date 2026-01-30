import { Link } from 'react-router-dom'

const LoanOptionsPage = () => (
  <main>
    <section id="loan-options-hero" className="hero-section hero-section--image hero-section--image-house-2">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-12">
            <div className="hero-card p-4 p-md-5 light-fade">
              <p className="text-uppercase text-primary fw-semibold mb-2">
                Loan options
              </p>
              <h1 className="display-5 fw-bold">
                Find the right structure for every investment
              </h1>
              <p className="display-7">
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
                <h3 className="h5">DSCR</h3>
                <p className="text-muted">
                  High leverage for quick closings and competitive offers.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>Up to 85% LTV</li>
                  <li>Close in 7 days</li>
                  <li>Rates from 9.5%</li>
                </ul>
                <a className="btn btn-link p-0" href="/request-quote">
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h5">Non-QM</h3>
                <p className="text-muted">
                  Draw schedules with clear scopes and inspections.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>Up to 90% LTC</li>
                  <li>Same-week draws</li>
                  <li>Flexible scopes</li>
                </ul>
                <a className="btn btn-link p-0" href="/request-quote">
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h5">FHA</h3>
                <p className="text-muted">
                  Short-term options for timing gaps and refinances.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>12-24 month terms</li>
                  <li>Interest-only</li>
                  <li>Fast approvals</li>
                </ul>
                <a className="btn btn-link p-0" href="/request-quote">
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h5">HELOC</h3>
                <p className="text-muted">
                  Scalable financing for repeat investors and growing teams.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>Cross-collateral</li>
                  <li>Custom pricing</li>
                  <li>Dedicated PM</li>
                </ul>
                <a className="btn btn-link p-0" href="/request-quote">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default LoanOptionsPage
