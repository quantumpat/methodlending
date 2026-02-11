import { Link } from 'react-router-dom'
import RefinanceCalculator from '../components/RefinanceCalculator'

const RefinancePage = () => {
  return (
    <main>
      <section
        id="refinance-hero"
        className="hero-section hero-section--image hero-section--image-sky hero-section--image-contrast"
      >
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <p className="text-uppercase text-primary fw-semibold mb-2">Refinance program</p>
              <h1 className="display-5 fw-bold">
                Refinance to unlock equity and stabilize cash flow
              </h1>
              <p className="lead text-muted">
                Transition from short-term capital to a longer runway with clear terms, flexible
                structures, and fast underwriting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="refinance-reasons" className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h2 fw-bold">Why Refinance with DSCR?</h2>
            <p className="text-muted">Optimize your investment property financing.</p>
          </div>
          <div className="row g-4">
            {[
              {
                title: 'Lower Your Interest Rate',
                copy: 'Reduce your rate to improve monthly cash flow and profitability.',
              },
              {
                title: 'No Income Documentation',
                copy: 'Qualify based on property performance, not personal income.',
              },
              {
                title: 'Close in Your LLC',
                copy: 'Take title in your business entity while keeping financing flexible.',
              },
              {
                title: 'Improve Cash Flow',
                copy: 'Lower monthly payments increase rental property returns.',
              },
              {
                title: 'Flexible Loan Terms',
                copy: 'Choose fixed or ARM options to match your investment timeline.',
              },
              {
                title: 'Portfolio Refinancing',
                copy: 'Refinance multiple properties to streamline management.',
              },
            ].map((reason) => (
              <div key={reason.title} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">{reason.title}</h3>
                    <p className="text-muted mb-0">{reason.copy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RefinanceCalculator />

      <section id="refinance-cta" className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="h2 fw-bold">Ready to Optimize Your Investment?</h2>
          <p className="lead">Get a custom DSCR refinance quote for your property today.</p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link className="btn btn-light" to="/request-quote">
              Get Your Rate Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default RefinancePage
