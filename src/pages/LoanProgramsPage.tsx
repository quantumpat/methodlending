import { Link } from 'react-router-dom'

const requestQuote = { label: 'Request a Quote', to: '/request-quote' }

const programs = [
  {
    title: 'DSCR',
    bestFor: 'Buying, refinancing, or taking cash out of a rental.',
    qualify: 'On the property’s rent, not your personal income.',
    structure: 'Close in an LLC or in your own name. Typically 1-4 units.',
    cta: requestQuote,
  },
  {
    title: 'Asset Utilization',
    bestFor: 'Investors with substantial liquid assets who would rather not document income the usual way.',
    qualify: 'On verified assets, not tax returns or W-2s.',
    structure: 'Purchase, refinance, or cash-out on investment property.',
    cta: requestQuote,
  },
  {
    title: 'Bank Statement / Alt Doc',
    bestFor: 'Self-employed investors whose tax returns do not show the full picture.',
    qualify: 'On business bank statements or other records, not W-2s.',
    structure: 'Purchase, refinance, or cash-out, in an LLC or in your name.',
    cta: requestQuote,
  },
  {
    title: 'Multi-Unit (5+)',
    bestFor: 'Buying or refinancing a 5+ unit residential investment property.',
    qualify: 'On the property’s cash flow.',
    structure: 'Business-purpose financing on 5+ unit property.',
    cta: requestQuote,
  },
  {
    title: 'Fix & Flip',
    bestFor: 'Buying a residential investment property, renovating it, and selling it.',
    qualify: 'On the deal and the project, arranged through third-party lending partners.',
    structure: 'Short-term financing. Program maximums are on the Fix & Flip page.',
    cta: { label: 'View program', to: '/fix-and-flip' },
  },
  {
    title: 'Rehab',
    bestFor: 'Renovating an investment property you plan to hold as a rental.',
    qualify: 'Quoted per deal, arranged through third-party lending partners.',
    structure: 'Short-term renovation financing. A later DSCR refinance is a separate qualification.',
    cta: { label: 'View program', to: '/rehab-loans' },
  },
  {
    title: 'Ground-Up',
    bestFor: 'Building a new residential investment property to sell or hold as a rental.',
    qualify: 'On the project, arranged through third-party lending partners.',
    structure: 'Short-term construction financing. Program maximums are on the Ground-Up page.',
    cta: { label: 'View program', to: '/ground-up-construction' },
  },
]

const LoanProgramsPage = () => (
  <main>
    <section id="loan-options-hero" className="hero-section hero-section--image hero-section--image-house-2">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-12">
            <div className="hero-card p-4 p-md-5 light-fade">
              <p className="text-uppercase text-primary fw-semibold mb-2">
                Loan programs
              </p>
              <h1 className="display-5 fw-bold">
                Loan programs for investment property.
              </h1>
              <p className="lead text-muted">
                See who each program is for, how you qualify, and what it can be used for.
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
          {programs.map((program) => (
            <div key={program.title} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm loan-option-card">
                <div className="card-body loan-option-card__body">
                  <h3 className="h5">{program.title}</h3>
                  <div className="loan-option-card__facts">
                    <p>
                      <strong>Best for.</strong> {program.bestFor}
                    </p>
                    <p>
                      <strong>How you qualify.</strong> {program.qualify}
                    </p>
                    <p>
                      <strong>Typical structure.</strong> {program.structure}
                    </p>
                  </div>
                  <Link className="btn btn-link p-0 loan-option-card__cta" to={program.cta.to}>
                    {program.cta.label}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-muted fst-italic mt-4 mb-0">
          All programs are offered for business-purpose, non-owner-occupied real estate transactions only.
        </p>
      </div>
    </section>
  </main>
)

export default LoanProgramsPage
