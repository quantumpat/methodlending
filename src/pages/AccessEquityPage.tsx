import { Link } from 'react-router-dom'
const AccessEquityPage = () => {
  return (
    <main>
      <section
        id="access-equity-hero"
        className="hero-section hero-section--image hero-section--image-sky hero-section--image-contrast"
      >
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <p className="text-uppercase text-primary fw-semibold mb-2">Access equity</p>
              <h1 className="display-5 fw-bold">
                Pull cash out of an investment property
              </h1>
              <p className="lead text-muted">
                Cash-out refinance on a rental, qualified on the property’s income, not your tax returns. Use
                the proceeds for another purchase, a rehab, or reserves, as long as it is a business purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="access-equity-cashout" className="section">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 text-center">
              <h2 className="h2 fw-bold">DSCR Cash-Out Refinance</h2>
            </div>
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 p-md-5">
                  <h3 className="h4 fw-semibold">Cash-Out Refinance Program</h3>
                  <p className="text-muted">
                    Replace your existing mortgage with a larger loan and receive the difference
                    in cash. Qualify based on rental income rather than tax returns or W-2s.
                  </p>
                  <ul className="check-list mb-0">
                    <li>Up to 75% LTV for cash-out (varies by credit and loan amount).</li>
                    <li>DSCR as low as 0.75 accepted (varies by program).</li>
                    <li>Loan amounts from $100,000 to $3.5 million.</li>
                    <li>No personal income verification required.</li>
                    <li>Close in your LLC or personal name.</li>
                    <li>30- and 40-year fixed, 7/6 and 10/6 ARM options.</li>
                    <li>Credit scores as low as 620 accepted.</li>
                    <li>Cash-out proceeds for business purposes.</li>
                  </ul>
                  <p className="text-muted mt-4 mb-0">
                    Investors typically use cash-out proceeds for a down payment on the next property, a
                    rehab, or reserves. Proceeds have to be for a business purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="access-equity-cta" className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="h2 fw-bold">Want to know how much you can take out?</h2>
          <p className="lead">Send the property and the current loan balance.</p>
          <Link className="btn btn-light" to="/request-quote">
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  )
}

export default AccessEquityPage
