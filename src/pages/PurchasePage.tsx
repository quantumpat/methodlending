import { Link } from 'react-router-dom'

const PurchasePage = () => (
  <main>
    <section id="purchase-hero" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <p className="text-uppercase text-primary fw-semibold mb-2">
              Purchase lending
            </p>
            <h1 className="display-5 fw-bold">
              Acquisition capital built for fast closings
            </h1>
            <p className="lead text-muted">
              Move quickly on your next deal with clear terms, dedicated
              underwriting, and a streamlined checklist.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-primary btn-lg" href="/#contact">
                Start a purchase request
              </a>
              <Link className="btn btn-outline-primary btn-lg" to="/request-quote">
                Request a Quote
              </Link>
              <a className="btn btn-outline-primary btn-lg" href="/#solutions">
                Compare loan options
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="purchase-benefits" className="section bg-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h2 className="h3 fw-bold">Why investors choose Method</h2>
            <p className="text-muted">
              A purchase experience designed around speed, clarity, and
              predictable draws.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Clear underwriting</h3>
                    <p className="text-muted mb-0">
                      Know exactly what’s needed and when to keep your deal on
                      track.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Dedicated closing team</h3>
                    <p className="text-muted mb-0">
                      One point of contact from intake to funding.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Flexible structures</h3>
                    <p className="text-muted mb-0">
                      Bridge, rehab, and portfolio options built around your
                      timeline.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Fast draws</h3>
                    <p className="text-muted mb-0">
                      Predictable funding with same-week inspection reviews.
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

export default PurchasePage
