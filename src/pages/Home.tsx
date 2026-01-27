import { Link } from 'react-router-dom'

const Home = () => (
  <main>
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <p className="text-uppercase text-primary fw-semibold mb-2">
              Method Lending
            </p>
            <h1 className="display-5 fw-bold">
              Modern capital solutions for real estate investors
            </h1>
            <p className="lead text-muted">
              Fast, transparent lending for acquisitions, rehab, and bridge
              financing. We help you close confidently with clear terms and
              responsive support.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-primary btn-lg" href="/#contact">
                Start a conversation
              </a>
              <Link className="btn btn-outline-primary btn-lg" to="/request-quote">
                  Request a Quote
              </Link>
              <a className="btn btn-outline-primary btn-lg" href="/#process">
                See how it works
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-card p-4 p-md-5">
              <h2 className="h4 fw-semibold mb-3">Funding highlights</h2>
              <ul className="list-unstyled mb-4">
                <li className="d-flex align-items-start gap-3 mb-3">
                  <span className="badge bg-primary-subtle text-primary">1</span>
                  <div>
                    <strong>Fast approvals</strong>
                    <p className="text-muted mb-0">
                      Same-week decisions with streamlined underwriting.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <span className="badge bg-primary-subtle text-primary">2</span>
                  <div>
                    <strong>Flexible terms</strong>
                    <p className="text-muted mb-0">
                      Short-term, rehab, and bridge products tailored to your
                      strategy.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="badge bg-primary-subtle text-primary">3</span>
                  <div>
                    <strong>Dedicated support</strong>
                    <p className="text-muted mb-0">
                      Real people, clear updates, and a partner in your corner.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="d-flex flex-wrap gap-3">
                <div>
                  <p className="text-muted mb-1">Typical close</p>
                  <p className="h4 mb-0">7-10 days</p>
                </div>
                <div>
                  <p className="text-muted mb-1">Loan sizes</p>
                  <p className="h4 mb-0">$150k - $5M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="solutions" className="section bg-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h2 className="h3 fw-bold">Solutions built for speed</h2>
            <p className="text-muted">
              We specialize in lending that keeps projects moving with
              predictable draws and clear milestones.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Acquisition Loans</h3>
                    <p className="text-muted mb-0">
                      Competitive terms for property purchases with quick
                      turnarounds.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Rehab Financing</h3>
                    <p className="text-muted mb-0">
                      Structured draw schedules and clear budgets for renovation
                      work.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Bridge Loans</h3>
                    <p className="text-muted mb-0">
                      Short-term flexibility to cover timing gaps or refinance
                      quickly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">Portfolio Support</h3>
                    <p className="text-muted mb-0">
                      Scaling guidance and repeat borrower perks as your
                      portfolio grows.
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
                Sample timeline
              </p>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="h2 mb-0">Day 1</p>
                  <p className="text-muted">Initial review</p>
                </div>
                <div>
                  <p className="h2 mb-0">Day 4</p>
                  <p className="text-muted">Term sheet</p>
                </div>
                <div>
                  <p className="h2 mb-0">Day 9</p>
                  <p className="text-muted">Funds released</p>
                </div>
              </div>
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
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <h2 className="h3 fw-bold">Let’s build your funding plan</h2>
            <p className="text-muted">
              Tell us about your next deal and we’ll follow up with a tailored
              quote.
            </p>
            <div className="contact-card p-4">
              <p className="mb-1 fw-semibold">Contact</p>
              <p className="text-muted mb-3">hello@methodlending.com</p>
              <p className="mb-1 fw-semibold">Office</p>
              <p className="text-muted mb-0">Austin, TX</p>
            </div>
          </div>
          <div className="col-lg-6">
            <form className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    Full name
                  </label>
                  <input
                    className="form-control"
                    id="name"
                    placeholder="Alex Morgan"
                    type="text"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    placeholder="alex@email.com"
                    type="email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="project">
                    Project type
                  </label>
                  <select className="form-select" id="project">
                    <option>Acquisition</option>
                    <option>Rehab</option>
                    <option>Bridge</option>
                    <option>Portfolio</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="details">
                    Project details
                  </label>
                  <textarea
                    className="form-control"
                    id="details"
                    rows={4}
                    placeholder="Tell us about your property and timeline."
                  />
                </div>
                <button className="btn btn-primary w-100" type="submit">
                    Request a Quote
                </button>
                <Link className="btn btn-link mt-3 w-100" to="/request-quote">
                  Go to full request form
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default Home
