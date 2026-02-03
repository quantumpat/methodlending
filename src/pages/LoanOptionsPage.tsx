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
                  Qualify on property cash flow for faster, investor-ready approvals.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>Offer One</li>
                  <li>Offer Two</li>
                  <li>Offer Three</li>
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
                  Alternative documentation and flexible terms for complex income.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>Offer One</li>
                  <li>Offer Two</li>
                  <li>Offer Three</li>
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
                  Low down payment options with government-backed guidelines.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>Offer One</li>
                  <li>Offer Two</li>
                  <li>Offer Three</li>
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
                  Revolving credit that taps equity as projects and needs change.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>Offer One</li>
                  <li>Offer Two</li>
                  <li>Offer Three</li>
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
