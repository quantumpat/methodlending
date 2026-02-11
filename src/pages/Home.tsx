import { Link } from 'react-router-dom'

const Home = () => (
  <main>
    <section id="home" className="hero-section hero-section--image">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold">
              Finding the Right Mortgage for You
            </h1>
            <h5 className="display-7 fs-3">
              Your path to home investment starts here
            </h5>
            <p className="lead text-muted">
              Purchase, refinance, and investment opportunity with clarity. <br /> Professional guidance and structure at every step.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link className="btn btn-primary btn-lg" to="/request-quote">
                Request a Quote
              </Link>
              <a
                className="btn btn-success btn-lg hidden"
                href="http://methodlending.loanzify.io/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
              <Link className="btn btn-lg btn-loan-options" to="/loan-options">
                Loan Options
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="hero-cta-grid hero-cta-grid--slide">
          <Link
            className="hero-cta-button hero-cta-button--access-equity"
            to="/access-equity"
            aria-label="Access Equity"
          >
            <span className="visually-hidden">Access Equity</span>
          </Link>
          <Link
            className="hero-cta-button hero-cta-button--refinance"
            to="/refinance"
            aria-label="Refinance"
          >
            <span className="visually-hidden">Refinance</span>
          </Link>
          <Link
            className="hero-cta-button hero-cta-button--purchase"
            to="/purchase"
            aria-label="Investment Property Purchase"
          >
            <span className="visually-hidden">Investment Property Purchase</span>
          </Link>
        </div>
      </div>
    </section>

    <section id="solutions" className="section bg-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-12">
            <h2 className="h3 fw-bold">Loan options built for you</h2>
            <p className="text-muted mb-0">
              Business-purpose financing solutions built for real estate investors.
            </p>
          </div>
        </div>
        <div className="row g-4 mt-1">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm loan-option-card">
              <div className="card-body">
                <h3 className="h5">DSCR</h3>
                <ul className="text-muted mb-0">
                  <li>Purchase financing for income-producing investment properties</li>
                  <li>Qualification based on property cash flow and debt service coverage</li>
                  <li>Business-purpose, non-owner-occupied transactions only</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm loan-option-card">
              <div className="card-body">
                <h3 className="h5">Asset Utilization</h3>
                <ul className="text-muted mb-0">
                  <li>Uses verified assets in place of traditional income documentation</li>
                  <li>Ideal for investors with strong balance sheets and complex cash flow</li>
                  <li>Business-purpose real estate financing only</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm loan-option-card">
              <div className="card-body">
                <h3 className="h5">Bank Statement and Alt Doc for Business Purpose</h3>
                <ul className="text-muted mb-0">
                  <li>Uses business bank statements or alternative financial records in place of traditional income</li>
                  <li>Designed for self-employed investors and entity-owned properties</li>
                  <li>Business-purpose real estate transactions only</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm loan-option-card">
              <div className="card-body">
                <h3 className="h5">Multi-Unit Property</h3>
                <ul className="text-muted mb-0">
                  <li>Financing for 5+ unit residential investment properties</li>
                  <li>Focused on cash flow, scale, and long-term portfolio growth</li>
                  <li>Non-owner-occupied, business-purpose only</li>
                </ul>
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
                    <li>Final DSCR must be {'>='} 1.15.</li>
                    <li>Use assets to augment DSCR.</li>
                    <li>Perfect credit required (0x30x12).</li>
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
        <div className="col-lg-4">
        </div>
          <div className="col-lg-4">
            <Link className="btn btn-primary btn-lg w-100" to="/request-quote">
              Request a Quote
            </Link>
          </div>
      </div>
    </section>
  </main>
)

export default Home
