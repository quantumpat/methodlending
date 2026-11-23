import { Link } from 'react-router-dom'

const RefinancePage = () => {
  return (
    <main>
      <section
        id="refinance-hero"
        className="hero-section hero-section--image hero-section--image-sky hero-section--image-contrast"
      >
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <p className="text-uppercase text-primary fw-semibold mb-2">Refinance loans</p>
              <h1 className="display-5 fw-bold">
                Refinance an investment property.
              </h1>
              <p className="lead text-muted">
                Change the rate or term on a rental, qualified on the property’s rent. If you want cash out, that
                is a different loan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="refinance-reasons" className="section">
        <div className="container">
          <h2 className="h2 fw-bold mb-4">Rate-and-term or cash-out.</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h5">Rate-and-term refinance</h3>
                  <p className="text-muted mb-0">
                    Replace the current loan with a new one, usually to change the rate or the term. No cash
                    out. Qualification is typically on the property’s rent.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h5">Cash-out refinance</h3>
                  <p className="text-muted mb-0">
                    Replace the current loan with a larger one and take the difference in cash, for a business
                    purpose. See <Link to="/access-equity">Access Equity</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="refinance-guidelines" className="section bg-light">
        <div className="container">
          <h2 className="h2 fw-bold">DSCR refinance guidelines</h2>
          <p className="text-muted mb-4">
            Figures shown are program maximums. They vary by credit, loan amount, and program. This is not a
            commitment to lend.
          </p>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h5">Standard DSCR Refinance</h3>
                  <ul className="check-list mb-0">
                    <li>DSCR {'>='} 1.00 required.</li>
                    <li>Up to 80% LTV (varies by credit and loan amount).</li>
                    <li>No personal income verification. The property’s rent is still reviewed.</li>
                    <li>Credit scores from 620.</li>
                    <li>Close in LLC or personal name.</li>
                    <li>Loan amounts up to $3.5M.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h5">Lower DSCR Options</h3>
                  <ul className="check-list mb-0">
                    <li>DSCR as low as 0.75 accepted.</li>
                    <li>Up to 75% LTV available.</li>
                    <li>Loan amounts up to $3M.</li>
                    <li>Minimum 680 credit score.</li>
                    <li>Experienced investors preferred.</li>
                    <li>Ideal for value-add properties.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h5">Premium Options</h3>
                  <ul className="check-list mb-0">
                    <li>Asset depletion allowed.</li>
                    <li>Minimum 680 credit score.</li>
                    <li>Use assets to augment DSCR.</li>
                    <li>No 30-day late payments in the last 12 months.</li>
                    <li>Loan amounts up to $2M.</li>
                    <li>Initial DSCR 0.75-0.99.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
