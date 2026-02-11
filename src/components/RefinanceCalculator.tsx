import { useState } from 'react'

type SavingsResult = {
  currentPayment: number
  newPayment: number
  monthlySavings: number
  annualSavings: number
  dscr: number
  status: 'excellent' | 'good' | 'fair' | 'poor'
  statusText: string
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

const RefinanceCalculator = () => {
  const [monthlyRent, setMonthlyRent] = useState('3000')
  const [savingsLoanAmount, setSavingsLoanAmount] = useState('400000')
  const [currentRate, setCurrentRate] = useState('7.5')
  const [newRate, setNewRate] = useState('6.5')
  const [monthlyExpenses, setMonthlyExpenses] = useState('800')
  const [savingsResult, setSavingsResult] = useState<SavingsResult | null>(null)

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
  )
}

export default RefinanceCalculator
