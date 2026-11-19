import { Link } from 'react-router-dom'

const RefinancePage = () => {
  return (
    <main>
      <section
        id="refinance-hero"
        className="hero-section"
      >
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <p className="text-uppercase text-primary fw-semibold mb-2">Refinance program</p>
              <h1 className="display-5 fw-bold">
                Refinance the rental. Keep the DSCR qualification.
              </h1>
              <p className="lead text-muted">
                Move a short-term or high-rate loan onto a longer DSCR term. Qualify on the property’s rent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="refinance-reasons" className="section">
        <div className="container">
          <h2 className="h2 fw-bold">Why investors refinance with DSCR</h2>
          <ul className="check-list mb-0">
            <li>Qualify on the property, not your tax returns.</li>
            <li>Close in your LLC.</li>
            <li>
              If you want cash out, go to <Link to="/access-equity">Access Equity</Link>.
            </li>
          </ul>
        </div>
      </section>

      <section id="refinance-cta" className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="h2 fw-bold">Want a refinance quote?</h2>
          <p className="lead">Send the property and the current loan. We will come back with options.</p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link className="btn btn-light" to="/request-quote">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default RefinancePage
