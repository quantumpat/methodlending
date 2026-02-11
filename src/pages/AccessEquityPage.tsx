import { Link } from 'react-router-dom'

const AccessEquityPage = () => (
  <main>
    <section
      id="access-equity-hero"
      className="hero-section hero-section--image hero-section--image-sky"
    >
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <p className="text-uppercase text-primary fw-semibold mb-2">Access equity</p>
            <h1 className="display-5 fw-bold">
              Unlock property equity without slowing your momentum
            </h1>
            <p className="lead text-muted">
              Turn built-up equity into capital for acquisitions, renovations, or portfolio growth
              with clear terms and business-purpose underwriting.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-primary btn-lg" href="/#contact">
                Start a cash-out request
              </a>
              <Link className="btn btn-outline-primary btn-lg" to="/request-quote">
                Request a Quote
              </Link>
              <a className="btn btn-outline-primary btn-lg" href="/loan-options">
                Compare loan options
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="access-equity-steps" className="section bg-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h2 className="h3 fw-bold">How it works</h2>
            <p className="text-muted">
              A streamlined path to convert equity into growth capital.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Share the property details</h3>
                    <p className="text-muted mb-0">
                      Provide current value, rent roll, and existing debt to size the opportunity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Review terms and structure</h3>
                    <p className="text-muted mb-0">
                      Evaluate leverage, pricing, and payback strategy with a clear term sheet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Underwrite with speed</h3>
                    <p className="text-muted mb-0">
                      Business-purpose underwriting built around asset performance and cash flow.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Fund and deploy</h3>
                    <p className="text-muted mb-0">
                      Close with coordinated escrow and deploy capital into your next move.
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

    <section id="access-equity-uses" className="section">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h2 className="h3 fw-bold">Use cases</h2>
            <p className="text-muted">
              Common ways investors deploy equity for growth.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">New acquisitions</h3>
                    <p className="text-muted mb-0">
                      Use equity to secure down payments on income-producing assets.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Renovations and repositioning</h3>
                    <p className="text-muted mb-0">
                      Fund improvements that drive rent growth and stronger DSCR.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Portfolio recapitalization</h3>
                    <p className="text-muted mb-0">
                      Restructure debt to free cash for long-term scaling.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Bridge to stabilization</h3>
                    <p className="text-muted mb-0">
                      Access liquidity while stabilizing occupancy and cash flow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="access-equity-next" className="section bg-light">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-8">
            <h2 className="h3 fw-bold">Ready to access your equity?</h2>
            <p className="text-muted">
              Tell us about the property and we will map the best structure for your goals.
            </p>
          </div>
          <div className="col-lg-4">
            <Link className="btn btn-primary btn-lg w-100" to="/request-quote">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default AccessEquityPage
