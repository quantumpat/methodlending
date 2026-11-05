import { Link } from 'react-router-dom'
import QualificationOptions from '../components/QualificationOptions'
import { HighlightGrid } from '../components/ProgramPage'
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
                Turn your equity into opportunity
              </h1>
              <p className="lead text-muted">
                Turn built-up equity into capital for acquisitions, renovations, or portfolio growth
                with clear terms and business-purpose underwriting.
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
              <p className="text-muted">
                Unlock your property equity without personal income documentation.
              </p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="access-equity-second-lien" className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h2 fw-bold">DSCR Second Lien</h2>
            <p className="text-muted mb-0">
              Access equity while keeping your existing first mortgage in place.
            </p>
          </div>
          <p className="text-muted mx-auto mb-4 program-intro">
            A closed-end second mortgage lets you take cash out of a rental property without refinancing
            your first mortgage, so its rate and terms stay as they are. Qualification is based on the
            property&rsquo;s rental income rather than personal income.
          </p>
          <HighlightGrid
            highlights={[
              { title: 'Up to 80%', detail: 'combined loan-to-value (CLTV)' },
              { title: '$75,000 – $750,000', detail: 'loan amounts' },
              { title: 'DSCR 1.00+', detail: 'qualify on the property’s rental income' },
              { title: '10–30 years', detail: 'fixed-rate, fully amortizing terms' },
              { title: 'Keep your first mortgage', detail: 'stand-alone second lien; proceeds may be all cash out' },
              { title: '680 minimum', detail: 'credit score' },
              {
                title: 'Experienced investors',
                detail: '12+ months of investment property ownership within the last 36 months',
              },
              { title: 'Long- and short-term rentals', detail: 'short-term rental income with 12 months of history' },
            ]}
          />
          <p className="program-disclaimer text-muted mt-4 mb-0">
            Figures shown are program maximums. Maximum CLTV depends on credit score, loan amount, property
            type, and market conditions; 2–4 unit and condominium properties are limited to 70% CLTV.
            Investment properties owned at least 6 months only. A prepayment penalty applies where permitted
            by law. Not available in all areas, including Texas. Actual terms depend on the borrower,
            property, and lender approval. Not a commitment to lend. Method Lending, LLC is a mortgage broker
            that arranges business-purpose financing through third-party lending partners. Method Lending
            does not fund loans, perform lender valuations, or make underwriting or credit decisions.
          </p>
        </div>
      </section>

      <section id="access-equity-benefits" className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h2 fw-bold">Why Access Your Investment Property Equity?</h2>
            <p className="text-muted">Strategic uses for your cash-out proceeds.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h5">Acquire More Properties</h3>
                  <p className="text-muted mb-0">
                    Use equity for down payments and expand your portfolio faster.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h5">Fund Renovations</h3>
                  <p className="text-muted mb-0">
                    Finance improvements that raise rents and property value.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h5">Business Growth</h3>
                  <p className="text-muted mb-0">
                    Deploy capital into new deals or operating reserves.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h5">Optimize Portfolio</h3>
                  <p className="text-muted mb-0">
                    Consolidate debt to improve cash flow across assets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QualificationOptions id="access-equity-qualify" purpose="cash-out" shaded />

      <section id="access-equity-cta" className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="h2 fw-bold">Ready to Unlock Your Property Value?</h2>
          <p className="lead">
            Let us calculate how much cash you can access from your investment property.
          </p>
          <Link className="btn btn-light" to="/request-quote">
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  )
}

export default AccessEquityPage
