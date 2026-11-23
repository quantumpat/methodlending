import { Link } from 'react-router-dom'

const PurchasePage = () => (
  <main>
    <section
      id="purchase-hero"
      className="hero-section hero-section--image hero-section--image-sky hero-section--image-contrast"
    >
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <p className="text-uppercase text-primary fw-semibold mb-2">
              Purchase lending
            </p>
            <h1 className="display-5 fw-bold">
              DSCR purchase loans built for real estate investors.
            </h1>
            <p className="lead text-muted">
              Our DSCR programs focus on the property’s ability to generate cash flow, allowing investors to qualify based on rental income rather than personal earnings.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="purchase-highlights" className="section bg-light">
      <div className="container">
        <h2 className="h3 fw-bold">What you can expect on a purchase</h2>
        <ul className="check-list mb-0">
          <li>Qualify on the property’s rent, not your personal income.</li>
          <li>Credit scores from 620, depending on the program.</li>
          <li>Close in an LLC or in your name.</li>
        </ul>
      </div>
    </section>

    <section id="purchase-cta" className="section bg-primary text-white">
      <div className="container text-center">
        <h2 className="h2 fw-bold">Have a property under contract, or one you want to buy?</h2>
        <p className="lead">Send us the deal and we will quote it.</p>
        <Link className="btn btn-light" to="/request-quote">
          Request a Quote
        </Link>
      </div>
    </section>
  </main>
)

export default PurchasePage
