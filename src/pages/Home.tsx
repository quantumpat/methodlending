import { Link } from 'react-router-dom'

const Home = () => (
  <main>
    <section id="home" className="hero-section hero-section--navy">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-12">
            <div className="hero-navy-content">
              <h1 className="display-5 fw-bold">
                Built for Real Estate Investors.
              </h1>
              <h5 className="lead display-9 fs-3">
                DSCR and other business-purpose loans for rental and investment property. Qualify on the
                property’s cash flow, not your W-2.
              </h5>
              <div className="d-flex flex-wrap gap-3">
                <Link className="btn btn-light btn-lg" to="/request-quote">
                  Request a Quote
                </Link>
                <Link className="btn btn-outline-light btn-lg" to="/loan-programs">
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
            <span className="hero-cta-button__text">Purchase</span>
            <span className="visually-hidden">Investment Property Purchase</span>
          </Link>
          <Link
            className="hero-cta-button hero-cta-button--refinance"
            to="/refinance"
            aria-label="Refinance"
          >
            <span className="hero-cta-button__text">Refinance</span>
            <span className="visually-hidden">Refinance</span>
          </Link>
          <Link
            className="hero-cta-button hero-cta-button--access-equity"
            to="/access-equity"
            aria-label="Access Equity"
          >
            <span className="hero-cta-button__text">Access Equity</span>
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
              DSCR, assets, bank statements, and 5+ unit property. All of them are business-purpose and
              non-owner-occupied only.
            </p>
          </div>
        </div>
        <div className="row g-4 mt-1">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm loan-option-card">
              <div className="card-body">
                <h3 className="h5">DSCR</h3>
                <p className="text-muted mb-0">Purchase an income-producing rental based on the property’s cash flow, not your personal income.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm loan-option-card">
              <div className="card-body">
                <h3 className="h5">Asset Utilization</h3>
                <p className="text-muted mb-0">Use verified assets instead of tax returns or W-2s. A fit when the balance sheet is strong and income is messy.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm loan-option-card">
              <div className="card-body">
                <h3 className="h5">Bank Statement and Alt Doc for Business Purpose</h3>
                <p className="text-muted mb-0">Use business bank statements or other records when you are self-employed or the property sits in an entity.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm loan-option-card">
              <div className="card-body">
                <h3 className="h5">Multi-Unit Property</h3>
                <p className="text-muted mb-0">Financing for 5+ unit residential investment property, based on cash flow.</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-muted fst-italic mt-4 mb-0">
          All programs are offered for business-purpose, non-owner-occupied real estate transactions only.
        </p>
      </div>
    </section>

    
    <section id="refinance-benefits" className="section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h5">Standard DSCR Refinance</h3>
                  <ul className="check-list mb-0">
                    <li>DSCR {'>='} 1.00 required.</li>
                    <li>Up to 80% LTV (varies by credit and loan amount).</li>
                    <li>No income verification needed.</li>
                    <li>Credit scores from 620.</li>
                    <li>Close in LLC or personal name.</li>
                    <li>Loan amounts up to $3.5M.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h5">Lower DSCR Options</h3>
                  <ul className="check-list mb-0">
                    <li>DSCR as low as 0.75 accepted.</li>
                    <li>Up to 75% LTV available.</li>
                    <li>Loan amounts up to $3M.</li>
                    <li>Minimum 680 credit score.</li>
                    <li>Experienced investors preferred.</li>
                    <li>Ideal for value-add properties.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h5">Premium Options</h3>
                  <ul className="check-list mb-0">
                    <li>Asset depletion allowed.</li>
                    <li>Minimum 680 credit score.</li>
                    <li>Use assets to augment DSCR.</li>
                    <li>No 30-day late payments in the last 12 months.</li>
                    <li>Loan amounts up to $2M.</li>
                    <li>Initial DSCR 0.75-0.99.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
