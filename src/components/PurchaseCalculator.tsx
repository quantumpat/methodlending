import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PurchaseCalculator = () => {
  const [propertyValue, setPropertyValue] = useState(400000)
  const [downPaymentType, setDownPaymentType] = useState<'percent' | 'dollar'>('percent')
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [downPaymentDollar, setDownPaymentDollar] = useState(80000)
  const [creditScore, setCreditScore] = useState('740')
  const [loanType, setLoanType] = useState<'purchase' | 'refinance' | 'cashout'>('purchase')
  const [propertyType, setPropertyType] = useState('single-family')
  const [dscr, setDscr] = useState<'1.00+' | '<1.00'>('1.00+')

  const [monthlyRent, setMonthlyRent] = useState('3000')
  const [calculatedDSCR, setCalculatedDSCR] = useState<number | null>(null)
  const [showDSCRCalculator, setShowDSCRCalculator] = useState(false)

  const getLoanAmount = () => {
    if (downPaymentType === 'percent') {
      return propertyValue * (1 - downPaymentPercent / 100)
    }
    return propertyValue - downPaymentDollar
  }

  const loanAmount = getLoanAmount()
  const ltv = (loanAmount / propertyValue) * 100

  const getMaxLTV = () => {
    const score = Number.parseInt(creditScore, 10)
    const isDSCRAbove1 = dscr === '1.00+'

    if (!isDSCRAbove1) {
      if (score >= 700) {
        if (loanAmount <= 1500000) {
          return loanType === 'purchase' ? 75 : loanType === 'refinance' ? 75 : 70
        }
        if (loanAmount <= 2000000) {
          return loanType === 'purchase' ? 70 : loanType === 'refinance' ? 70 : 65
        }
        if (loanAmount <= 3000000) {
          return loanType === 'purchase' ? 70 : loanType === 'refinance' ? 70 : 0
        }
      } else if (score >= 680) {
        if (loanAmount <= 1500000) {
          return loanType === 'purchase' ? 70 : loanType === 'refinance' ? 70 : 65
        }
        if (loanAmount <= 2000000) {
          return loanType === 'purchase' ? 65 : loanType === 'refinance' ? 65 : 60
        }
        if (loanAmount <= 3000000) {
          return loanType === 'purchase' ? 60 : loanType === 'refinance' ? 60 : 0
        }
      } else if (score >= 660) {
        if (loanAmount <= 1000000) {
          return loanType === 'purchase' ? 65 : loanType === 'refinance' ? 65 : 0
        }
      }
      return 0
    }

    if (score >= 740) {
      if (loanAmount <= 1000000) {
        return loanType === 'purchase' ? 85 : loanType === 'refinance' ? 80 : 75
      }
      if (loanAmount <= 1500000) {
        return loanType === 'purchase' ? 80 : loanType === 'refinance' ? 80 : 75
      }
      if (loanAmount <= 2000000) {
        return loanType === 'purchase' ? 75 : loanType === 'refinance' ? 75 : 70
      }
      if (loanAmount <= 3500000) {
        return loanType === 'purchase' ? 70 : loanType === 'refinance' ? 70 : 65
      }
    } else if (score >= 700) {
      if (loanAmount <= 1000000) {
        return loanType === 'purchase' ? 85 : loanType === 'refinance' ? 80 : 75
      }
      if (loanAmount <= 1500000) {
        return loanType === 'purchase' ? 80 : loanType === 'refinance' ? 80 : 75
      }
      if (loanAmount <= 2000000) {
        return loanType === 'purchase' ? 75 : loanType === 'refinance' ? 75 : 70
      }
      if (loanAmount <= 3500000) {
        return loanType === 'purchase' ? 70 : loanType === 'refinance' ? 70 : 65
      }
    } else if (score >= 680) {
      if (loanAmount <= 1000000) {
        return loanType === 'purchase' ? 80 : loanType === 'refinance' ? 75 : 70
      }
      if (loanAmount <= 1500000) {
        return loanType === 'purchase' ? 75 : loanType === 'refinance' ? 75 : 70
      }
      if (loanAmount <= 2000000) {
        return loanType === 'purchase' ? 70 : loanType === 'refinance' ? 70 : 65
      }
      if (loanAmount <= 2500000) {
        return loanType === 'purchase' ? 70 : loanType === 'refinance' ? 65 : 65
      }
      if (loanAmount <= 3000000) {
        return loanType === 'purchase' ? 65 : loanType === 'refinance' ? 65 : 0
      }
    } else if (score >= 660) {
      if (loanAmount <= 1000000) {
        return loanType === 'purchase' ? 80 : loanType === 'refinance' ? 75 : 70
      }
      if (loanAmount <= 1500000) {
        return loanType === 'purchase' ? 75 : loanType === 'refinance' ? 75 : 70
      }
      if (loanAmount <= 2500000) {
        return loanType === 'purchase' ? 70 : loanType === 'refinance' ? 65 : 65
      }
      if (loanAmount <= 3000000) {
        return loanType === 'purchase' ? 65 : loanType === 'refinance' ? 65 : 0
      }
    } else if (score >= 640) {
      if (loanAmount <= 1000000) {
        return loanType === 'purchase' ? 70 : loanType === 'refinance' ? 70 : 60
      }
      if (loanAmount <= 2000000) {
        return loanType === 'purchase' ? 65 : loanType === 'refinance' ? 65 : 0
      }
      if (loanAmount <= 3000000) {
        return loanType === 'purchase' ? 60 : loanType === 'refinance' ? 60 : 0
      }
    } else if (score >= 620) {
      if (loanAmount <= 1000000) {
        return loanType === 'purchase' ? 65 : loanType === 'refinance' ? 65 : 55
      }
      if (loanAmount <= 1500000) {
        return loanType === 'purchase' ? 60 : loanType === 'refinance' ? 60 : 0
      }
      if (loanAmount <= 2000000) {
        return loanType === 'purchase' ? 55 : loanType === 'refinance' ? 55 : 0
      }
    }
    return 0
  }

  const calculateMonthlyPayment = () => {
    let rate = 7.5
    const score = Number.parseInt(creditScore, 10)

    if (score >= 740) rate = 7.25
    else if (score >= 700) rate = 7.375
    else if (score >= 680) rate = 7.5
    else if (score >= 660) rate = 7.625
    else if (score >= 640) rate = 7.875
    else rate = 8.125

    if (loanType === 'refinance') rate -= 0.125
    if (loanType === 'cashout') rate += 0.375
    if (dscr === '<1.00') rate += 0.5

    const monthlyRate = rate / 100 / 12
    const numPayments = 360

    const pi =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)

    const propertyTax = (propertyValue * 0.012) / 12
    const insurance = (propertyValue * 0.005) / 12
    const pmi = ltv > 80 ? (loanAmount * 0.005) / 12 : 0

    const maxLTV = getMaxLTV()
    const ltvValid = maxLTV > 0 && ltv <= maxLTV

    const pitia = pi + propertyTax + insurance

    return {
      pi,
      propertyTax,
      insurance,
      pmi,
      total: pi + propertyTax + insurance + pmi,
      rate,
      maxLTV,
      ltvValid,
      pitia,
    }
  }

  const payment = calculateMonthlyPayment()

  useEffect(() => {
    const rent = Number.parseFloat(monthlyRent)
    if (rent && payment.pitia && showDSCRCalculator) {
      const dscrValue = rent / payment.pitia
      setCalculatedDSCR(dscrValue)
      setDscr(dscrValue >= 1.0 ? '1.00+' : '<1.00')
    }
  }, [monthlyRent, payment.pitia, showDSCRCalculator])

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)

  const handleDownPaymentPercentChange = (value: number) => {
    setDownPaymentPercent(value)
    setDownPaymentDollar(propertyValue * (value / 100))
  }

  const handleDownPaymentDollarChange = (value: number) => {
    setDownPaymentDollar(value)
    setDownPaymentPercent((value / propertyValue) * 100)
  }

  return (
    <section id="purchase-calculator" className="section bg-light">
      <div className="container">
        <div className="row align-items-end g-4 mb-4">
          <div className="col-lg-7">
            <h2 className="h2 fw-bold mb-2">DSCR Loan Estimator</h2>
            <p className="text-muted mb-0">
              Estimate loan size, pricing, and DSCR fit for investment properties.
            </p>
          </div>
          <div className="col-lg-5 text-lg-end">
            <Link className="btn btn-outline-primary" to="/request-quote">
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="h5 fw-semibold mb-4">Property Information</h3>

                <div className="mb-4">
                  <label className="form-label">Property Value</label>
                  <input
                    type="range"
                    min={100000}
                    max={4000000}
                    step={10000}
                    value={propertyValue}
                    onChange={(event) => {
                      const newValue = Number(event.target.value)
                      setPropertyValue(newValue)
                      if (downPaymentType === 'percent') {
                        setDownPaymentDollar(newValue * (downPaymentPercent / 100))
                      } else {
                        setDownPaymentPercent((downPaymentDollar / newValue) * 100)
                      }
                    }}
                    className="form-range"
                  />
                  <div className="h4 fw-bold text-primary mb-0">
                    {formatCurrency(propertyValue)}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Down Payment</label>
                  <div className="btn-group w-100 mb-3" role="group">
                    <button
                      type="button"
                      onClick={() => setDownPaymentType('percent')}
                      className={`btn ${
                        downPaymentType === 'percent' ? 'btn-primary' : 'btn-outline-primary'
                      }`}
                    >
                      Percentage
                    </button>
                    <button
                      type="button"
                      onClick={() => setDownPaymentType('dollar')}
                      className={`btn ${
                        downPaymentType === 'dollar' ? 'btn-primary' : 'btn-outline-primary'
                      }`}
                    >
                      Dollar Amount
                    </button>
                  </div>

                  {downPaymentType === 'percent' ? (
                    <>
                      <input
                        type="range"
                        min={5}
                        max={50}
                        step={1}
                        value={downPaymentPercent}
                        onChange={(event) =>
                          handleDownPaymentPercentChange(Number(event.target.value))
                        }
                        className="form-range"
                      />
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="h4 fw-bold text-primary mb-0">
                          {downPaymentPercent}%
                        </span>
                        <span className="text-muted">
                          {formatCurrency(downPaymentDollar)}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <input
                        type="range"
                        min={propertyValue * 0.05}
                        max={propertyValue * 0.5}
                        step={5000}
                        value={downPaymentDollar}
                        onChange={(event) =>
                          handleDownPaymentDollarChange(Number(event.target.value))
                        }
                        className="form-range"
                      />
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="h4 fw-bold text-primary mb-0">
                          {formatCurrency(downPaymentDollar)}
                        </span>
                        <span className="text-muted">
                          {downPaymentPercent.toFixed(1)}%
                        </span>
                      </div>
                    </>
                  )}
                  <div className="text-muted mt-2">
                    Loan Amount: {formatCurrency(loanAmount)}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Credit Score</label>
                  <select
                    value={creditScore}
                    onChange={(event) => setCreditScore(event.target.value)}
                    className="form-select"
                  >
                    <option value="740">740+ (Excellent)</option>
                    <option value="700">700-739 (Very Good)</option>
                    <option value="680">680-699 (Good)</option>
                    <option value="660">660-679 (Fair)</option>
                    <option value="640">640-659 (Fair)</option>
                    <option value="620">620-639 (Below Average)</option>
                  </select>
                </div>

                <div className="mb-4">
                  <button
                    type="button"
                    onClick={() => setShowDSCRCalculator((prev) => !prev)}
                    className="btn btn-outline-primary w-100"
                  >
                    {showDSCRCalculator ? 'Hide DSCR Calculator' : 'Calculate Your DSCR'}
                  </button>
                </div>

                {showDSCRCalculator && (
                  <div className="card border-primary mb-4">
                    <div className="card-body">
                      <h4 className="h6 fw-semibold">DSCR Calculator</h4>
                      <p className="text-muted small">
                        DSCR = Monthly Rent / PITIA (Principal, Interest, Taxes, Insurance, Association
                        dues)
                      </p>

                      <div className="mb-3">
                        <label className="form-label">Expected Monthly Rent</label>
                        <input
                          type="text"
                          value={monthlyRent}
                          onChange={(event) => {
                            const value = event.target.value
                            if (value === '' || /^\d*\.?\d*$/.test(value)) {
                              setMonthlyRent(value)
                            }
                          }}
                          onBlur={(event) => {
                            if (event.target.value === '') {
                              setMonthlyRent('0')
                            }
                          }}
                          className="form-control"
                          placeholder="Enter monthly rent"
                        />
                      </div>

                      <div className="border rounded p-3 mb-3">
                        <div className="small text-muted">Monthly PITIA Payment</div>
                        <div className="h5 fw-bold mb-0">{formatCurrency(payment.pitia)}</div>
                        <div className="small text-muted">Updates with loan changes.</div>
                      </div>

                      {calculatedDSCR !== null && (
                        <div
                          className={`alert mb-0 ${
                            calculatedDSCR >= 1.0 ? 'alert-success' : 'alert-warning'
                          }`}
                        >
                          <div className="fw-semibold">
                            {calculatedDSCR >= 1.0 ? 'Your DSCR' : 'Your DSCR (low)'}
                          </div>
                          <div className="h4 fw-bold mb-2">
                            {calculatedDSCR.toFixed(2)}
                          </div>
                          <div className="small">
                            {calculatedDSCR >= 1.15
                              ? 'Excellent. Property cash flow is strong.'
                              : calculatedDSCR >= 1.0
                              ? 'Good. Property covers the loan payment.'
                              : 'Property has negative cash flow. Additional requirements may apply.'}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <label className="form-label">Expected DSCR</label>
                  <select
                    value={dscr}
                    onChange={(event) => setDscr(event.target.value as '1.00+' | '<1.00')}
                    className="form-select"
                  >
                    <option value="1.00+">1.00 or Higher (Property covers loan)</option>
                    <option value="<1.00">Below 1.00 (Negative cash flow)</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label">Loan Purpose</label>
                  <select
                    value={loanType}
                    onChange={(event) =>
                      setLoanType(event.target.value as 'purchase' | 'refinance' | 'cashout')
                    }
                    className="form-select"
                  >
                    <option value="purchase">Purchase</option>
                    <option value="refinance">Rate/Term Refinance</option>
                    <option value="cashout">Cash-Out Refinance</option>
                  </select>
                </div>

                <div className="mb-0">
                  <label className="form-label">Property Type</label>
                  <select
                    value={propertyType}
                    onChange={(event) => setPropertyType(event.target.value)}
                    className="form-select"
                  >
                    <option value="single-family">Single Family Home</option>
                    <option value="2-4-units">2-4 Unit Property</option>
                    <option value="condo">Condo</option>
                    <option value="townhouse">Townhouse</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column gap-4">
              {!payment.ltvValid && payment.maxLTV > 0 && (
                <div className="alert alert-warning">
                  <div className="fw-semibold">LTV Too High</div>
                  <p className="mb-0">
                    Your current LTV is {ltv.toFixed(1)}%, but the maximum allowed for your
                    scenario is {payment.maxLTV}%. Increase your down payment to at least{' '}
                    {formatCurrency((propertyValue * (100 - payment.maxLTV)) / 100)}.
                  </p>
                </div>
              )}

              {!payment.ltvValid && payment.maxLTV === 0 && (
                <div className="alert alert-danger">
                  <div className="fw-semibold">Not Eligible</div>
                  <p className="mb-0">
                    This combination of credit score, loan amount, and loan type is not eligible
                    under current DSCR guidelines.
                  </p>
                </div>
              )}

              <div className={`card border-0 shadow-sm ${payment.ltvValid ? 'bg-primary' : 'bg-secondary'} text-white`}>
                <div className="card-body p-4">
                  <h3 className="h5 fw-semibold mb-2">Estimated Monthly Payment</h3>
                  <div className="display-6 fw-bold mb-2">{formatCurrency(payment.total)}</div>
                  <div className="small text-white-50">
                    Based on a 30-year fixed rate DSCR loan.
                  </div>
                  <div className="mt-3 pt-3 border-top border-white border-opacity-25">
                    <div className="small text-white-50">Current LTV: {ltv.toFixed(1)}%</div>
                    {payment.maxLTV > 0 && (
                      <div className="small text-white-50">
                        Max Allowed LTV: {payment.maxLTV}%
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h5 fw-semibold mb-3">Payment Breakdown</h3>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <span className="text-muted">Principal & Interest</span>
                    <span className="fw-semibold">{formatCurrency(payment.pi)}</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <span className="text-muted">Property Taxes (est.)</span>
                    <span className="fw-semibold">{formatCurrency(payment.propertyTax)}</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <span className="text-muted">Insurance (est.)</span>
                    <span className="fw-semibold">{formatCurrency(payment.insurance)}</span>
                  </div>
                  {payment.pmi > 0 && (
                    <div className="d-flex justify-content-between border-bottom py-2">
                      <span className="text-muted">PMI (est.)</span>
                      <span className="fw-semibold">{formatCurrency(payment.pmi)}</span>
                    </div>
                  )}
                  <div className="d-flex justify-content-between align-items-center mt-3 p-2 bg-light rounded">
                    <span className="fw-semibold">Monthly PITIA</span>
                    <span className="h5 fw-bold text-primary mb-0">
                      {formatCurrency(payment.pitia)}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-2 p-2 bg-light rounded">
                    <span className="fw-semibold">Estimated Rate</span>
                    <span className="h5 fw-bold text-primary mb-0">
                      {payment.rate.toFixed(3)}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <h3 className="h5 fw-semibold mb-3">Ready to Get Started?</h3>
                  <p className="text-muted">
                    Get a personalized quote and guidance on DSCR investment property loans.
                  </p>
                  <Link className="btn btn-primary w-100" to="/request-quote">
                    Contact Method Lending
                  </Link>
                  <p className="small text-muted mt-3 mb-0">
                    This estimate is for informational purposes only. Actual rates and terms may vary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow-sm mt-5">
          <div className="card-body p-4">
            <p className="fw-semibold mb-2">Important Disclaimers</p>
            <div className="small text-muted d-flex flex-column gap-2">
              <p className="mb-0">
                Estimates are for informational purposes only and do not constitute a loan offer,
                pre-qualification, pre-approval, or commitment to lend. Actual terms depend on
                underwriting review and market conditions.
              </p>
              <p className="mb-0">
                Rates, LTV limits, and program eligibility vary by credit, property, and investor
                guidelines. Additional restrictions may apply by property type, location, and loan
                structure.
              </p>
              <p className="mb-0">
                Taxes and insurance are estimates. Verify actual costs with your tax authority and
                insurance provider. Closing costs and other fees are not included.
              </p>
              <p className="mb-0">
                DSCR calculations are based on estimated PITIA and rental income. Final DSCR will be
                determined using lender-approved documentation during underwriting.
              </p>
              <p className="mb-0">
                Method Lending, LLC is committed to fair lending. Availability and terms are subject
                to change without notice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PurchaseCalculator
