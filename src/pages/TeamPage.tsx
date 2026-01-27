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
          <div className="col-12">
            <h2 className="h3 fw-bold">Meet the people behind Method</h2>
            <p className="text-muted">
              Dedicated teams for underwriting, closing, and portfolio support.
            </p>
          </div>
        </div>
        <div className="row g-4 mt-1">
          <div className="col-lg-6">
            <div className="card team-card h-100 border-0 shadow-sm">
              <img
                className="card-img-top team-photo team-photo--aaron"
                src="/images/Aaron%20Iverson.jpg"
                alt="Aaron Iverson"
              />
              <div className="card-body">
                <h3 className="h5">Aaron Iverson</h3>
                <p className="fw-semibold mb-2">CEO</p>
                <p className="text-muted mb-0">
                  With years of mortgage industry experience, Aaron Iverson is
                  dedicated to making financing simple and stress-free. He
                  focuses on clear communication, smart solutions, and building
                  trust with every client.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card team-card h-100 border-0 shadow-sm">
              <img
                className="card-img-top team-photo"
                src="/images/Miles%20Trotter.jpg"
                alt="Miles Trotter"
              />
              <div className="card-body">
                <h3 className="h5">Miles Trotter</h3>
                <p className="fw-semibold mb-2">President</p>
                <p className="text-muted mb-0">
                  Miles Trotter brings expertise in both mortgages and real
                  estate, offering clients a well-rounded perspective. His goal
                  is to guide borrowers with insight and confidence through
                  every step of the process.
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
    </section>
  </main>
)

export default TeamPage
