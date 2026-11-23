import { Link } from 'react-router-dom'

const Home = () => (
  <main>
    <section id="home" className="hero-section hero-section--image">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-12">
            <div className="hero-glass-card">
              <h1 className="display-5 fw-bold">
                Built for Real Estate Investors.
              </h1>
              <h5 className="lead display-9 fs-3">
                DSCR and other business-purpose loans for rental and investment property. Qualify on the
                property’s cash flow, not your W-2.
              </h5>
              <div className="d-flex flex-wrap gap-3">
                <Link className="btn btn-primary btn-lg" to="/request-quote">
                  Request a Quote
                </Link>
                <Link className="btn btn-lg btn-loan-options" to="/loan-programs">
                  Loan Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="hero-cta-grid hero-cta-grid--slide">
          <Link
            className="hero-cta-button hero-cta-button--purchase"
            to="/purchase"
            aria-label="Investment Property Purchase"
          >
            <span className="hero-cta-button__badge" aria-hidden="true" />
            <span className="hero-cta-button__copy">
              <span className="hero-cta-button__text">Purchase</span>
              <span className="hero-cta-button__sub">Buy a rental or other investment property.</span>
            </span>
            <span className="visually-hidden">Investment Property Purchase</span>
          </Link>
          <Link
            className="hero-cta-button hero-cta-button--refinance"
            to="/refinance"
            aria-label="Refinance"
          >
            <span className="hero-cta-button__badge" aria-hidden="true" />
            <span className="hero-cta-button__copy">
              <span className="hero-cta-button__text">Refinance</span>
              <span className="hero-cta-button__sub">Change your rate or loan term.</span>
            </span>
            <span className="visually-hidden">Refinance</span>
          </Link>
          <Link
            className="hero-cta-button hero-cta-button--access-equity"
            to="/access-equity"
            aria-label="Access Equity"
          >
            <span className="hero-cta-button__badge" aria-hidden="true" />
            <span className="hero-cta-button__copy">
              <span className="hero-cta-button__text">Access Equity</span>
              <span className="hero-cta-button__sub">Pull cash out for the next investment.</span>
            </span>
            <span className="visually-hidden">Access Equity</span>
          </Link>
        </div>
      </div>
    </section>

    <section id="solutions" className="section bg-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-12">
            <h2 className="h3 fw-bold">Loan programs</h2>
            <p className="text-muted mb-0">
              DSCR, asset utilization, bank statement / alt doc, and 5+ unit property, plus fix and flip,
              rehab, and ground-up. <Link to="/loan-programs">Compare programs</Link>
            </p>
          </div>
        </div>
        <div className="row g-4 mt-1">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm loan-option-card">
              <div className="card-body">
                <h3 className="h5">
                  <Link className="stretched-link text-reset" to="/loan-programs">
                    DSCR
                  </Link>
                </h3>
                <p className="text-muted mb-0">Qualify on the property’s rent, not your personal income. Use it to buy, refinance, or cash out, in an LLC or your own name.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm loan-option-card">
              <div className="card-body">
                <h3 className="h5">
                  <Link className="stretched-link text-reset" to="/loan-programs">
                    Asset Utilization
                  </Link>
                </h3>
                <p className="text-muted mb-0">For investors with substantial liquid assets who would rather not document income the usual way.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm loan-option-card">
              <div className="card-body">
                <h3 className="h5">
                  <Link className="stretched-link text-reset" to="/loan-programs">
                    Bank Statement / Alt Doc
                  </Link>
                </h3>
                <p className="text-muted mb-0">For self-employed investors whose tax returns do not show the full picture.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm loan-option-card">
              <div className="card-body">
                <h3 className="h5">
                  <Link className="stretched-link text-reset" to="/loan-programs">
                    Multi-Unit (5+)
                  </Link>
                </h3>
                <p className="text-muted mb-0">Buy or refinance a 5+ unit property, qualifying on its cash flow.</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-muted fst-italic mt-4 mb-0">
          All programs are offered for business-purpose, non-owner-occupied real estate transactions only.
        </p>
      </div>
    </section>

    <section id="contact" className="section">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <Link className="btn btn-primary btn-lg w-100" to="/request-quote">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default Home
