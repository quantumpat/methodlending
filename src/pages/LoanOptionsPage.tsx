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
                Business-purpose financing solutions built for real estate investors.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link className="btn btn-outline-primary btn-lg" to="/request-quote">
                  Request a Quote
                </Link>
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
            <div className="card h-100 border-0 shadow-sm loan-option-card">
              <div className="card-body loan-option-card__body">
                <h3 className="h5">DSCR</h3>
                <ul className="text-muted mb-3">
                  <li>Purchase financing for income-producing investment properties</li>
                  <li>Qualification based on property cash flow and debt service coverage</li>
                  <li>Business-purpose, non-owner-occupied transactions only</li>
                </ul>
                <a className="btn btn-link p-0 loan-option-card__cta" href="/request-quote">
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm loan-option-card">
              <div className="card-body loan-option-card__body">
                <h3 className="h5">Asset Utilization</h3>
                <ul className="text-muted mb-3">
                  <li>Uses verified assets in place of traditional income documentation</li>
                  <li>Ideal for investors with strong balance sheets and complex cash flow</li>
                  <li>Business-purpose real estate financing only</li>
                </ul>
                <a className="btn btn-link p-0 loan-option-card__cta" href="/request-quote">
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm loan-option-card">
              <div className="card-body loan-option-card__body">
                <h3 className="h5">Bank Statement and Alt Doc for Business Purpose</h3>
                <ul className="text-muted mb-3">
                  <li>Uses business bank statements or alternative financial records in place of traditional income</li>
                  <li>Designed for self-employed investors and entity-owned properties</li>
                  <li>Business-purpose real estate transactions only</li>
                </ul>
                <a className="btn btn-link p-0 loan-option-card__cta" href="/request-quote">
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm loan-option-card">
              <div className="card-body loan-option-card__body">
                <h3 className="h5">Multi-Unit Property</h3>
                <ul className="text-muted mb-3">
                  <li>Financing for 5+ unit residential investment properties</li>
                  <li>Focused on cash flow, scale, and long-term portfolio growth</li>
                  <li>Non-owner-occupied, business-purpose only</li>
                </ul>
                <a className="btn btn-link p-0 loan-option-card__cta" href="/request-quote">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-muted fst-italic mt-4 mb-0">
          Loan Options - All programs are offered for business-purpose, non-owner-occupied real estate
          transactions only.
        </p>
      </div>
    </section>
  </main>
)

export default LoanOptionsPage
