import { Link } from 'react-router-dom'

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
  </main>
)

export default RefinancePage
