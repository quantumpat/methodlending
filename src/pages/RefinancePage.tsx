import { Link } from 'react-router-dom'
import PurchaseCalculator from '../components/PurchaseCalculator'

const RefinancePage = () => (
  <main>
    <section id="refinance-hero" className="hero-section hero-section--image hero-section--image-sky">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <p className="text-uppercase text-primary fw-semibold mb-2">
              Refinance program
            </p>
            <h1 className="display-5 fw-bold">
              Refinance to unlock equity and stabilize cash flow
            </h1>
            <p className="lead text-muted">
              Transition from short-term capital to a longer runway with clear
              terms, flexible structures, and fast underwriting.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-primary btn-lg" href="/#contact">
                Start refinance request
              </a>
              <Link className="btn btn-outline-primary btn-lg" to="/request-quote">
                Request a Quote
              </Link>
              <a className="btn btn-outline-primary btn-lg" href="/loan-options">
                Review loan options
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <PurchaseCalculator />

    <section id="refinance-benefits" className="section bg-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h2 className="h3 fw-bold">Refinance with confidence</h2>
            <p className="text-muted">
              Unlock equity while keeping your project moving on a predictable
              timeline.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Portfolio-friendly terms</h3>
                    <p className="text-muted mb-0">
                      Flexible structures for stabilized or in-flight assets.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Clear reserves</h3>
                    <p className="text-muted mb-0">
                      Transparent escrows and rehab holdbacks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Dedicated servicing</h3>
                    <p className="text-muted mb-0">
                      A single point of contact for draw requests and updates.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Fast underwriting</h3>
                    <p className="text-muted mb-0">
                      Clear checklist and same-week term sheets.
                    </p>
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
        </div>
      </div>
    </section>

    <section id="refinance-eligibility" className="section">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <h2 className="h3 fw-bold">Is refinancing right for you?</h2>
            <p className="text-muted">Refinancing may make sense if you want to:</p>
            <ul className="check-list">
              <li>Lower your monthly payment</li>
              <li>Access your home’s equity</li>
              <li>Secure a better rate</li>
              <li>Consolidate debt</li>
            </ul>
            <p className="text-muted mb-0">
              Our Method professionals are here to help with any of your refinancing needs.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              className="refinance-eligibility-image"
              src="/images/House%202.jpg"
              alt="Refinancing illustration"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="refinance-cash-out" className="section">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-5">
            <h2 className="h3 fw-bold">Cash-out refinance</h2>
            <p className="text-muted">
              Tap into built-up equity to reinvest, renovate, or consolidate higher-cost debt
              while keeping long-term financing in place.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link className="btn btn-primary" to="/request-quote">
                Request a Quote
              </Link>
              <a className="btn btn-outline-primary" href="/loan-options">
                Review loan options
              </a>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Liquidity for growth</h3>
                    <p className="text-muted mb-0">
                      Access cash for acquisitions, renovations, or reserves.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Lower monthly pressure</h3>
                    <p className="text-muted mb-0">
                      Replace short-term capital with fixed, predictable payments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Flexible structures</h3>
                    <p className="text-muted mb-0">
                      Terms built for stabilized rentals, bridge exits, or portfolio needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Fast close timeline</h3>
                    <p className="text-muted mb-0">
                      Streamlined documentation with clear underwriting checkpoints.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default RefinancePage
