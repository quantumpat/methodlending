import { Link } from 'react-router-dom'
import PurchaseCalculator from '../components/PurchaseCalculator'

const PurchasePage = () => (
  <main>
    <section id="purchase-highlights" className="section bg-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h2 className="h3 fw-bold">Business Purpose/DSCR highlights</h2>
            <p className="text-muted">
              Proven DSCR purchase lending built for business-purpose investment properties.
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
          </div>
        </div>
      </div>
    </section>

    <PurchaseCalculator />

    <section id="purchase-cta" className="section bg-primary text-white">
      <div className="container text-center">
        <h2 className="h2 fw-bold">Ready to start your purchase?</h2>
        <p className="lead">Get a custom DSCR purchase quote for your investment property.</p>
        <Link className="btn btn-light" to="/request-quote">
          Request a Quote
        </Link>
      </div>
    </section>
  </main>
)

export default PurchasePage
