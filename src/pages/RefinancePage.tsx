import { useState } from 'react'
import { Link } from 'react-router-dom'

type CashOutResult = {
  propertyValue: number
  currentMortgage: number
  maxLTV: number
  maxLoanAmount: number
  cashOut: number
}

type SavingsResult = {
  currentPayment: number
  newPayment: number
  monthlySavings: number
  annualSavings: number
  dscr: number
  status: 'excellent' | 'good' | 'fair' | 'poor'
  statusText: string
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

const calculateMonthlyPayment = (loanAmount: number, annualRate: number) => {
  const monthlyRate = annualRate / 100 / 12
  const numPayments = 360
  if (monthlyRate === 0) {
    return loanAmount / numPayments
  }
  return (
    loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
    (Math.pow(1 + monthlyRate, numPayments) - 1)
  )
}

const RefinancePage = () => {
  const [cashOutPropertyValue, setCashOutPropertyValue] = useState('500000')
  const [cashOutMortgage, setCashOutMortgage] = useState('300000')
  const [cashOutCreditScore, setCashOutCreditScore] = useState('740')
  const [cashOutLoanTier, setCashOutLoanTier] = useState('1000000')
  const [cashOutResult, setCashOutResult] = useState<CashOutResult | null>(null)
  const [cashOutError, setCashOutError] = useState('')

  const [monthlyRent, setMonthlyRent] = useState('3000')
  const [savingsLoanAmount, setSavingsLoanAmount] = useState('400000')
  const [currentRate, setCurrentRate] = useState('7.5')
  const [newRate, setNewRate] = useState('6.5')
  const [monthlyExpenses, setMonthlyExpenses] = useState('800')
  const [savingsResult, setSavingsResult] = useState<SavingsResult | null>(null)

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

  const handleSavingsSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const rent = Number.parseFloat(monthlyRent)
    const loanAmount = Number.parseFloat(savingsLoanAmount)
    const currentRateValue = Number.parseFloat(currentRate)
    const newRateValue = Number.parseFloat(newRate)
    const expenses = Number.parseFloat(monthlyExpenses)

    const currentPayment = calculateMonthlyPayment(loanAmount, currentRateValue)
    const newPayment = calculateMonthlyPayment(loanAmount, newRateValue)
    const monthlySavings = currentPayment - newPayment
    const annualSavings = monthlySavings * 12
    const totalDebtService = newPayment + expenses
    const dscr = rent / totalDebtService

    let status: SavingsResult['status'] = 'poor'
    let statusText = 'Below minimum - Contact us for options'

    if (dscr >= 1.25) {
      status = 'excellent'
      statusText = 'Excellent - Strong approval likelihood'
    } else if (dscr >= 1.0) {
      status = 'good'
      statusText = 'Good - Qualifies for standard programs'
    } else if (dscr >= 0.75) {
      status = 'fair'
      statusText = 'Fair - Limited programs available (680+ credit)'
    }

    setSavingsResult({
      currentPayment,
      newPayment,
      monthlySavings,
      annualSavings,
      dscr,
      status,
      statusText,
    })
  }

  return (
    <main>
      <section
        id="refinance-hero"
        className="hero-section hero-section--image hero-section--image-sky"
      >
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <p className="text-uppercase text-primary fw-semibold mb-2">Refinance program</p>
              <h1 className="display-5 fw-bold">
                Refinance to unlock equity and stabilize cash flow
              </h1>
              <p className="lead text-muted">
                Transition from short-term capital to a longer runway with clear terms, flexible
                structures, and fast underwriting.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a className="btn btn-primary btn-lg" href="/#contact">
                  Start refinance request
                </a>
                <Link className="btn btn-outline-primary btn-lg" to="/request-quote">
                  Request a Quote
                </Link>
                <a className="btn btn-outline-primary btn-lg" href="/loan-options">
                  Review loan options
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="refinance-cashout" className="section">
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

      <section id="refinance-cashout-calculator" className="section bg-light">
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

      <section id="refinance-cashout-benefits" className="section">
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

      <section id="refinance-cashout-process" className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h2 fw-bold">The Cash-Out Process</h2>
            <p className="text-muted">Streamlined for real estate investors.</p>
          </div>
          <div className="row g-4">
            {[
              {
                title: 'Property Analysis',
                copy: 'Review rental income and determine DSCR and maximum LTV.',
              },
              {
                title: 'Loan Structure',
                copy: 'Select term and rate options aligned to your strategy.',
              },
              {
                title: 'Minimal Documentation',
                copy: 'No tax returns or income verification required.',
              },
              {
                title: 'Close and Deploy',
                copy: 'Close in 21-30 days and access equity for growth.',
              },
            ].map((step, index) => (
              <div key={step.title} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm text-center">
                  <div className="card-body">
                    <div className="display-6 fw-bold text-primary mb-3">{index + 1}</div>
                    <h3 className="h5">{step.title}</h3>
                    <p className="text-muted mb-0">{step.copy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="refinance-cta-cashout" className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="h2 fw-bold">Ready to Unlock Your Property Value?</h2>
          <p className="lead">
            Let us calculate how much cash you can access from your investment property.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link className="btn btn-light" to="/request-quote">
              Request a Quote
            </Link>
            <a className="btn btn-outline-light" href="/#contact">
              Speak with a Specialist
            </a>
          </div>
        </div>
      </section>

      <section id="refinance-reasons" className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h2 fw-bold">Why Refinance with DSCR?</h2>
            <p className="text-muted">Optimize your investment property financing.</p>
          </div>
          <div className="row g-4">
            {[
              {
                title: 'Lower Your Interest Rate',
                copy: 'Reduce your rate to improve monthly cash flow and profitability.',
              },
              {
                title: 'No Income Documentation',
                copy: 'Qualify based on property performance, not personal income.',
              },
              {
                title: 'Close in Your LLC',
                copy: 'Take title in your business entity while keeping financing flexible.',
              },
              {
                title: 'Improve Cash Flow',
                copy: 'Lower monthly payments increase rental property returns.',
              },
              {
                title: 'Flexible Loan Terms',
                copy: 'Choose fixed or ARM options to match your investment timeline.',
              },
              {
                title: 'Portfolio Refinancing',
                copy: 'Refinance multiple properties to streamline management.',
              },
            ].map((reason) => (
              <div key={reason.title} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">{reason.title}</h3>
                    <p className="text-muted mb-0">{reason.copy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="refinance-savings-calculator" className="section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 p-md-5">
                  <h3 className="h4 fw-semibold text-center">DSCR and Savings Calculator</h3>
                  <p className="text-muted text-center">
                    Calculate DSCR and potential monthly savings from refinancing.
                  </p>

                  <form className="mt-4" onSubmit={handleSavingsSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="dscr-rent">
                          Monthly Rental Income
                        </label>
                        <input
                          id="dscr-rent"
                          className="form-control"
                          type="number"
                          min={0}
                          value={monthlyRent}
                          onChange={(event) => setMonthlyRent(event.target.value)}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="dscr-loan">
                          Loan Amount
                        </label>
                        <input
                          id="dscr-loan"
                          className="form-control"
                          type="number"
                          min={0}
                          value={savingsLoanAmount}
                          onChange={(event) => setSavingsLoanAmount(event.target.value)}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="dscr-current-rate">
                          Current Interest Rate (%)
                        </label>
                        <input
                          id="dscr-current-rate"
                          className="form-control"
                          type="number"
                          step="0.01"
                          min={0}
                          value={currentRate}
                          onChange={(event) => setCurrentRate(event.target.value)}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="dscr-new-rate">
                          New Interest Rate (%)
                        </label>
                        <input
                          id="dscr-new-rate"
                          className="form-control"
                          type="number"
                          step="0.01"
                          min={0}
                          value={newRate}
                          onChange={(event) => setNewRate(event.target.value)}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label" htmlFor="dscr-expenses">
                          Monthly Property Expenses (taxes, insurance, HOA)
                        </label>
                        <input
                          id="dscr-expenses"
                          className="form-control"
                          type="number"
                          min={0}
                          value={monthlyExpenses}
                          onChange={(event) => setMonthlyExpenses(event.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <button className="btn btn-primary w-100 mt-4" type="submit">
                      Calculate DSCR and Savings
                    </button>
                  </form>

                  {savingsResult && (
                    <div className="mt-4">
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="border rounded p-3 h-100 text-center">
                            <div className="text-muted small">Current Monthly Payment</div>
                            <div className="h4 fw-bold mb-0">
                              {formatCurrency(savingsResult.currentPayment)}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="border rounded p-3 h-100 text-center">
                            <div className="text-muted small">New Monthly Payment</div>
                            <div className="h4 fw-bold mb-0">
                              {formatCurrency(savingsResult.newPayment)}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="border rounded p-3 h-100 text-center">
                            <div className="text-muted small">Monthly Savings</div>
                            <div className="h4 fw-bold text-success mb-0">
                              {formatCurrency(savingsResult.monthlySavings)}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="border rounded p-3 h-100 text-center">
                            <div className="text-muted small">Annual Savings</div>
                            <div className="h4 fw-bold text-success mb-0">
                              {formatCurrency(savingsResult.annualSavings)}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded p-4 mt-4 text-center">
                        <div className="text-muted small">Debt Service Coverage Ratio (DSCR)</div>
                        <div className="display-6 fw-bold text-primary">
                          {savingsResult.dscr.toFixed(2)}
                        </div>
                        <span
                          className={`badge mt-2 ${
                            savingsResult.status === 'excellent'
                              ? 'bg-success'
                              : savingsResult.status === 'good'
                              ? 'bg-info text-dark'
                              : savingsResult.status === 'fair'
                              ? 'bg-warning text-dark'
                              : 'bg-danger'
                          }`}
                        >
                          {savingsResult.statusText}
                        </span>
                        <p className="small text-muted mt-3 mb-0">
                          DSCR = Monthly Rental Income / (Monthly Payment + Expenses)
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="refinance-benefits" className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h2 fw-bold">Rate and Term Refinance Benefits</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h5">Standard DSCR Refinance</h3>
                  <ul className="check-list mb-0">
                    <li>DSCR {'>='} 1.00 required.</li>
                    <li>Up to 80% LTV (varies by credit and loan amount).</li>
                    <li>No income verification needed.</li>
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
                    <li>Final DSCR must be {'>='} 1.15.</li>
                    <li>Use assets to augment DSCR.</li>
                    <li>Perfect credit required (0x30x12).</li>
                    <li>Loan amounts up to $2M.</li>
                    <li>Initial DSCR 0.75-0.99.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="refinance-process" className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h2 fw-bold">The Refinancing Process</h2>
            <p className="text-muted">Simple, fast, and designed for investors.</p>
          </div>
          <div className="row g-4">
            {[
              {
                title: 'Property Review',
                copy: 'Analyze rental income and calculate DSCR.',
              },
              {
                title: 'Rate Options',
                copy: 'Receive multiple rate and term options to choose from.',
              },
              {
                title: 'Documentation',
                copy: 'Minimal docs with no income verification required.',
              },
              {
                title: 'Close Quickly',
                copy: 'Fund in 21-30 days with a full appraisal.',
              },
            ].map((step, index) => (
              <div key={step.title} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm text-center">
                  <div className="card-body">
                    <div className="display-6 fw-bold text-primary mb-3">{index + 1}</div>
                    <h3 className="h5">{step.title}</h3>
                    <p className="text-muted mb-0">{step.copy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="refinance-cta" className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="h2 fw-bold">Ready to Optimize Your Investment?</h2>
          <p className="lead">Get a custom DSCR refinance quote for your property today.</p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link className="btn btn-light" to="/request-quote">
              Get Your Rate Quote
            </Link>
            <a className="btn btn-outline-light" href="/#contact">
              Talk to a DSCR Specialist
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default RefinancePage
