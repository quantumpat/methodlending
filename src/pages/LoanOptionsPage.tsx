import { Link } from 'react-router-dom'

const LoanOptionsPage = () => (
  <main>
    <section id="loan-options-hero" className="hero-section hero-section--image hero-section--image-house-2">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-12">
            <div className="hero-card p-4 p-md-5 light-fade">
              <p className="text-uppercase text-primary fw-semibold mb-2">
                Loan options
              </p>
              <h1 className="display-5 fw-bold">
                Find the right structure for every investment
              </h1>
              <p className="display-7">
                Compare products designed for acquisitions, rehabs, bridge needs,
                and portfolio growth.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a className="btn btn-primary btn-lg" href="/#contact">
                  Request a Quote
                </a>
                <a
                  className="btn btn-success btn-lg"
                  href="http://methodlending.loanzify.io/register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
                <Link className="btn btn-outline-primary btn-lg" to="/request-quote">
                  Request a Quote
                </Link>
                <a className="btn btn-outline-primary btn-lg" href="/purchase">
                  Start a purchase request
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="loan-options-compare" className="section bg-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h5">DSCR</h3>
                <p className="text-muted">
                  Debt Service Coverage Ratio loans are designed for real estate investors. Qualification is primarily based on the property's rental income rather than personal income.
                </p>
                <p className="text-muted mb-0">
                  These loans are ideal for investors looking to scale without traditional income documentation.
                </p>
                <a className="btn btn-link p-0" href="/request-quote">
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm hidden">
              <div className="card-body">
                <h3 className="h5">Non-QM</h3>
                <p className="text-muted">
                  Non-Qualified Mortgage loans offer flexible financing options for borrowers who don’t fit traditional lending guidelines. Ideal for self-employed individuals, investors, and borrowers with non-traditional income sources.
                </p>
                <a className="btn btn-link p-0" href="/request-quote">
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm hidden">
              <div className="card-body">
                <h3 className="h5">FHA</h3>
                <p className="text-muted">
                  FHA loans are government-backed mortgages designed to help first-time and low-to-moderate income borrowers achieve homeownership.
                </p>
                <p className="text-muted mb-0">
                  These loans typically offer lower down payment requirements and more flexible credit guidelines. Buying a home for the American family.
                </p>
                <a className="btn btn-link p-0" href="/request-quote">
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm hidden">
              <div className="card-body">
                <h3 className="h5">HELOC</h3>
                <p className="text-muted">
                  A Home Equity Line of Credit allows homeowners to borrow against the equity in their home.
                </p>
                <p className="text-muted mb-0">
                  Funds can be accessed as needed, making it a flexible option for renovations, investments, or major expenses.
                </p>
                <a className="btn btn-link p-0" href="/request-quote">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default LoanOptionsPage
