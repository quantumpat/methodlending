import { Link } from 'react-router-dom'

const TeamPage = () => (
  <main>
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <p className="text-uppercase text-primary fw-semibold mb-2">
              Our team
            </p>
            <h1 className="display-5 fw-bold">
              Lending experts with real estate in their DNA
            </h1>
            <p className="lead text-muted">
              We partner with investors nationwide, combining underwriting
              expertise with hands-on project guidance.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-primary btn-lg" href="/#contact">
                Connect with us
              </a>
              <Link className="btn btn-outline-primary btn-lg" to="/request-quote">
                Request a quote
              </Link>
              <a className="btn btn-outline-primary btn-lg" href="/loan-options">
                View loan options
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-card p-4 p-md-5">
              <h2 className="h4 fw-semibold mb-3">Leadership at a glance</h2>
              <ul className="list-unstyled mb-0">
                <li className="d-flex align-items-start gap-3 mb-3">
                  <span className="badge bg-primary-subtle text-primary">15+</span>
                  <div>
                    <strong>Years of lending expertise</strong>
                    <p className="text-muted mb-0">
                      Our team has closed hundreds of investor projects.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <span className="badge bg-primary-subtle text-primary">9</span>
                  <div>
                    <strong>Local market analysts</strong>
                    <p className="text-muted mb-0">
                      Deep data on submarkets and property performance.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="badge bg-primary-subtle text-primary">24/7</span>
                  <div>
                    <strong>Client-first support</strong>
                    <p className="text-muted mb-0">
                      Quick responses and clear updates at every step.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section bg-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h2 className="h3 fw-bold">Meet the people behind Method</h2>
            <p className="text-muted">
              Dedicated teams for underwriting, closing, and portfolio support.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Capital Markets</h3>
                    <p className="text-muted mb-0">
                      Structures tailored to purchase, rehab, and refinance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Underwriting</h3>
                    <p className="text-muted mb-0">
                      Fast reviews with clear conditions and next steps.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Closing</h3>
                    <p className="text-muted mb-0">
                      Dedicated coordinators to keep your timeline on track.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Servicing</h3>
                    <p className="text-muted mb-0">
                      Support for draws, extensions, and portfolio strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Link className="btn btn-primary" to="/request-quote">
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default TeamPage
