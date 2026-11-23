import { Link } from 'react-router-dom'

const TeamPage = () => (
  <main>
    <section id="team-hero" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <p className="text-uppercase text-primary fw-semibold mb-2">
              Our team
            </p>
            <h1 className="display-5 fw-bold">
              The two people who will work your deal.
            </h1>
            <p className="lead text-muted">
              Aaron Iverson and Miles Trotter work investor deals here. One of them
              will quote your file and stay on it through closing.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link className="btn btn-primary btn-lg" to="/request-quote">
                Request a Quote
              </Link>
              <a className="btn btn-outline-primary btn-lg" href="/loan-programs">
                View loan programs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="team-leadership" className="section bg-light">
      <div className="container">
        <div className="row g-4">
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
                  Aaron is CEO of Method Lending. He works with investors on DSCR
                  and other business-purpose loans, from the first quote through
                  closing.
                </p>
                <p className="mt-3 mb-0">
                  <a href="mailto:aiverson@methodlending.com">aiverson@methodlending.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card team-card h-100 border-0 shadow-sm">
              <img
                className="card-img-top team-photo team-photo--miles"
                src="/images/Miles%20Trotter.jpg"
                alt="Miles Trotter"
              />
              <div className="card-body">
                <h3 className="h5">Miles Trotter</h3>
                <p className="fw-semibold mb-2">President</p>
                <p className="text-muted mb-0">
                  Miles is President of Method Lending. He comes from both mortgage
                  and real estate and works investor deals the same way: direct
                  communication and a clear quote.
                </p>
                <p className="mt-3 mb-0">
                  <a href="mailto:mtrotter@methodlending.com">mtrotter@methodlending.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center" />
      </div>
    </section>
  </main>
)

export default TeamPage
