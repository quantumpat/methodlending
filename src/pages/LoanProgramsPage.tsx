import { Link } from 'react-router-dom'

const LoanProgramsPage = () => (
  <main>
    <section id="loan-options-hero" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <p className="text-uppercase text-primary fw-semibold mb-2">
              Loan programs
            </p>
            <h1 className="display-5 fw-bold">
              Compare the programs.
            </h1>
            <p className="lead text-muted">
              All of these are business-purpose loans on non-owner-occupied property.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link className="btn btn-outline-primary btn-lg" to="/request-quote">
                Request a Quote
              </Link>
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
                <p className="text-muted mb-3">Purchase an income-producing rental based on the property’s cash flow, not your personal income.</p>
                <a className="btn btn-link p-0 loan-option-card__cta" href="/request-quote">
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm loan-option-card">
              <div className="card-body loan-option-card__body">
                <h3 className="h5">Asset Utilization</h3>
                <p className="text-muted mb-3">Use verified assets instead of tax returns or W-2s. A fit when the balance sheet is strong and income is messy.</p>
                <a className="btn btn-link p-0 loan-option-card__cta" href="/request-quote">
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm loan-option-card">
              <div className="card-body loan-option-card__body">
                <h3 className="h5">Bank Statement and Alt Doc for Business Purpose</h3>
                <p className="text-muted mb-3">Use business bank statements or other records when you are self-employed or the property sits in an entity.</p>
                <a className="btn btn-link p-0 loan-option-card__cta" href="/request-quote">
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm loan-option-card">
              <div className="card-body loan-option-card__body">
                <h3 className="h5">Multi-Unit Property</h3>
                <p className="text-muted mb-3">Financing for 5+ unit residential investment property, based on cash flow.</p>
                <a className="btn btn-link p-0 loan-option-card__cta" href="/request-quote">
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-muted fst-italic mt-4 mb-0">
          All programs are offered for business-purpose, non-owner-occupied real estate transactions only.
        </p>
      </div>
    </section>
  </main>
)

export default LoanProgramsPage
