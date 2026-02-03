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
              Your path to home ownership starts here
            </h5>
            <p className="lead text-muted">
              Purchase, refinance, and investment opportunity with clarity. <br /> Professional guidance and structure at every step.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link className="btn btn-primary btn-lg" to="/request-quote">
                Request a Quote
              </Link>
              <a
                className="btn btn-success btn-lg"
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
        <div className="hero-cta-grid">
          <Link className="hero-cta-button" to="/refinance#refinance-cash-out">
            Access Equity
          </Link>
          <Link className="hero-cta-button" to="/refinance">
            Refinance
          </Link>
          <Link className="hero-cta-button" to="/purchase">
            Buy a home
          </Link>
        </div>
      </div>
    </section>

    <section id="solutions" className="section bg-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h2 className="h3 fw-bold">Loan options built for you</h2>
            <p className="text-muted">
              Compare products designed for acquisitions, rehabs, bridge needs,
              and portfolio growth.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">DSCR</h3>
                    <p className="text-muted mb-0">
                      Debt Service Coverage Ratio loans for real estate investors, qualifying on rental income instead of personal income.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm hidden">
                  <div className="card-body">
                    <h3 className="h5">Non-QM</h3>
                    <p className="text-muted mb-0">
                      Flexible financing for self-employed borrowers, investors, and non-traditional income sources.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm hidden">
                  <div className="card-body">
                    <h3 className="h5">FHA</h3>
                    <p className="text-muted mb-0">
                      Government-backed mortgages with lower down payment requirements and flexible credit guidelines.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm hidden">
                  <div className="card-body">
                    <h3 className="h5">HELOC</h3>
                    <p className="text-muted mb-0">
                      A flexible line of credit that lets homeowners borrow against their home equity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="process" className="section">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <h2 className="h3 fw-bold">Our process</h2>
            <p className="text-muted">
              A simple three-step workflow designed to keep your deal on track
              without surprises.
            </p>
            <ol className="timeline">
              <li>
                <h3 className="h6 fw-semibold">Share your deal</h3>
                <p className="text-muted">
                  Provide the basics and your goals. We handle the rest.
                </p>
              </li>
              <li>
                <h3 className="h6 fw-semibold">Review terms</h3>
                <p className="text-muted">
                  Transparent pricing with a clear closing plan.
                </p>
              </li>
              <li>
                <h3 className="h6 fw-semibold">Close and fund</h3>
                <p className="text-muted">
                  Get capital in place quickly so you can move forward.
                </p>
              </li>
            </ol>
          </div>
          <div className="col-lg-6">
            <div className="process-card p-4 p-md-5">
              <p className="text-uppercase text-muted fw-semibold mb-2">
                Why borrowers choose us
              </p>
              <ul className="list-unstyled mb-4">
                <li className="d-flex gap-3 align-items-start mb-3">
                  <div>
                    <p className="h2 mb-0">Fast</p>
                    <p className="text-muted mb-0">Clear updates from application to close.</p>
                  </div>
                </li>
                <li className="d-flex gap-3 align-items-start mb-3">
                  <div>
                    <p className="h2 mb-0">Flexible</p>
                    <p className="text-muted mb-0">Solutions for purchase, refinance, and investment.</p>
                  </div>
                </li>
                <li className="d-flex gap-3 align-items-start">
                  <div>
                    <p className="h2 mb-0">Supported</p>
                    <p className="text-muted mb-0">A lending specialist helps you every step.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-4">
                <Link className="btn btn-outline-primary" to="/request-quote">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" className="section bg-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-8">
                    <h2 className="h3 fw-bold">Apply Now</h2>
                    <p className="text-muted">
                      Start your application to get matched with the right lending
                      options.
                    </p>
                    <div className="contact-card p-4">
                      <p className="mb-1 fw-semibold">Contact</p>
                      <p className="text-muted mb-3">aiverson@methodlending.com <br />mtrotter@methodlending.com</p>
                      <p className="mb-1 fw-semibold">Office</p>
                      <p className="text-muted mb-0">San Juan Capistrano, CA</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <p className="text-muted mb-4">
                      Complete a quick online application to get started.
                    </p>
                    <a
                      className="btn btn-success btn-lg w-100"
                      href="http://methodlending.loanzify.io/register"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply Now
                    </a>
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

export default Home
