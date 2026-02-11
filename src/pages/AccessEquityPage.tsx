import { useState } from 'react'
import { Link } from 'react-router-dom'

type CashOutResult = {
  propertyValue: number
  currentMortgage: number
  maxLTV: number
  maxLoanAmount: number
  cashOut: number
}

const cashOutLtvMatrix: Record<string, Record<string, number>> = {
  '740': {
    '1000000': 75,
    '1500000': 75,
    '2000000': 70,
    '2500000': 70,
    '3000000': 70,
    '3500000': 65,
  },
  '700': {
    '1000000': 75,
    '1500000': 75,
    '2000000': 70,
    '2500000': 70,
    '3000000': 70,
    '3500000': 65,
  },
  '680': {
    '1000000': 70,
    '1500000': 70,
    '2000000': 65,
    '2500000': 65,
    '3000000': 0,
    '3500000': 0,
  },
  '660': {
    '1000000': 70,
    '1500000': 70,
    '2000000': 65,
    '2500000': 65,
    '3000000': 0,
    '3500000': 0,
  },
  '640': {
    '1000000': 60,
    '1500000': 0,
    '2000000': 0,
    '2500000': 0,
    '3000000': 0,
    '3500000': 0,
  },
  '620': {
    '1000000': 55,
    '1500000': 0,
    '2000000': 0,
    '2500000': 0,
    '3000000': 0,
    '3500000': 0,
  },
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)

const AccessEquityPage = () => {
  const [cashOutPropertyValue, setCashOutPropertyValue] = useState('500000')
  const [cashOutMortgage, setCashOutMortgage] = useState('300000')
  const [cashOutCreditScore, setCashOutCreditScore] = useState('740')
  const [cashOutLoanTier, setCashOutLoanTier] = useState('1000000')
  const [cashOutResult, setCashOutResult] = useState<CashOutResult | null>(null)
  const [cashOutError, setCashOutError] = useState('')

  const handleCashOutSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setCashOutError('')

    const propertyValue = Number.parseFloat(cashOutPropertyValue)
    const currentMortgage = Number.parseFloat(cashOutMortgage)
    const maxLTV = cashOutLtvMatrix[cashOutCreditScore]?.[cashOutLoanTier] ?? 0

    if (!maxLTV) {
      setCashOutResult(null)
      setCashOutError(
        'This combination of credit score and loan amount is not available for cash-out. Adjust your inputs or contact us.'
      )
      return
    }

    const maxLoanAmount = propertyValue * (maxLTV / 100)
    const cashOut = Math.max(0, maxLoanAmount - currentMortgage)

    setCashOutResult({
      propertyValue,
      currentMortgage,
      maxLTV,
      maxLoanAmount,
      cashOut,
    })
  }

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

      <section id="access-equity-calc" className="section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 p-md-5">
                  <h3 className="h4 fw-semibold text-center">Cash-Out Equity Calculator</h3>
                  <p className="text-muted text-center">
                    Estimate available cash based on your property and credit profile.
                  </p>

                  <form className="mt-4" onSubmit={handleCashOutSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="cashout-value">
                          Current Property Value
                        </label>
                        <input
                          id="cashout-value"
                          className="form-control"
                          type="number"
                          min={0}
                          value={cashOutPropertyValue}
                          onChange={(event) => setCashOutPropertyValue(event.target.value)}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="cashout-mortgage">
                          Current Mortgage Balance
                        </label>
                        <input
                          id="cashout-mortgage"
                          className="form-control"
                          type="number"
                          min={0}
                          value={cashOutMortgage}
                          onChange={(event) => setCashOutMortgage(event.target.value)}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="cashout-score">
                          Credit Score (Middle Score)
                        </label>
                        <select
                          id="cashout-score"
                          className="form-select"
                          value={cashOutCreditScore}
                          onChange={(event) => setCashOutCreditScore(event.target.value)}
                          required
                        >
                          <option value="740">740+</option>
                          <option value="700">700-739</option>
                          <option value="680">680-699</option>
                          <option value="660">660-679</option>
                          <option value="640">640-659</option>
                          <option value="620">620-639</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="cashout-loan">
                          Estimated New Loan Amount
                        </label>
                        <select
                          id="cashout-loan"
                          className="form-select"
                          value={cashOutLoanTier}
                          onChange={(event) => setCashOutLoanTier(event.target.value)}
                          required
                        >
                          <option value="1000000">Up to $1,000,000</option>
                          <option value="1500000">$1,000,001 - $1,500,000</option>
                          <option value="2000000">$1,500,001 - $2,000,000</option>
                          <option value="2500000">$2,000,001 - $2,500,000</option>
                          <option value="3000000">$2,500,001 - $3,000,000</option>
                          <option value="3500000">$3,000,001 - $3,500,000</option>
                        </select>
                      </div>
                    </div>
                    <button className="btn btn-primary w-100 mt-4" type="submit">
                      Calculate Available Cash
                    </button>
                  </form>

                  {cashOutError && (
                    <div className="alert alert-warning mt-4 mb-0" role="alert">
                      {cashOutError}
                    </div>
                  )}

                  {cashOutResult && (
                    <div className="border rounded p-4 mt-4">
                      <div className="d-flex justify-content-between border-bottom py-2">
                        <span className="text-muted">Property Value</span>
                        <span className="fw-semibold">
                          {formatCurrency(cashOutResult.propertyValue)}
                        </span>
                      </div>
                      <div className="d-flex justify-content-between border-bottom py-2">
                        <span className="text-muted">Maximum LTV for Cash-Out</span>
                        <span className="fw-semibold">{cashOutResult.maxLTV}%</span>
                      </div>
                      <div className="d-flex justify-content-between border-bottom py-2">
                        <span className="text-muted">Maximum Loan Amount</span>
                        <span className="fw-semibold">
                          {formatCurrency(cashOutResult.maxLoanAmount)}
                        </span>
                      </div>
                      <div className="d-flex justify-content-between border-bottom py-2">
                        <span className="text-muted">Current Mortgage</span>
                        <span className="fw-semibold">
                          {formatCurrency(cashOutResult.currentMortgage)}
                        </span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3 p-3 bg-light rounded">
                        <span className="fw-semibold">Estimated Cash to You</span>
                        <span className="h4 fw-bold text-primary mb-0">
                          {formatCurrency(cashOutResult.cashOut)}
                        </span>
                      </div>
                      <p className="small text-muted mt-3 mb-0">
                        Estimated based on DSCR {'>='} 1.00. Actual LTV may vary based on property
                        type and underwriting.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
