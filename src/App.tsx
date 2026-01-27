import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.tsx'
import PurchasePage from './pages/PurchasePage.tsx'
import RefinancePage from './pages/RefinancePage.tsx'
import LoanOptionsPage from './pages/LoanOptionsPage.tsx'
import TeamPage from './pages/TeamPage.tsx'
import RequestQuotePage from './pages/RequestQuotePage.tsx'

function App() {
  return (
    <div className="page">
      <header className="navbar navbar-expand-lg bg-white border-bottom sticky-top shadow-sm">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img className="navbar-logo" src="/logo.svg" alt="Method Lending logo" />
            <span className="fw-semibold">Method Lending</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/purchase">
                  Purchase
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/refinance">
                  Refinance
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/loan-options">
                  Loan Options
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">
                  Our Team
                </Link>
              </li>
            </ul>
            <Link className="btn btn-primary ms-lg-3" to="/request-quote">
              Get a Quote
            </Link>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/refinance" element={<RefinancePage />} />
        <Route path="/loan-options" element={<LoanOptionsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/request-quote" element={<RequestQuotePage />} />
      </Routes>

      <footer className="footer border-top py-4">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <span className="text-muted">© 2026 Method Lending</span>
          <div className="d-flex gap-3">
            <a className="text-muted" href="/#home">
              Privacy
            </a>
            <a className="text-muted" href="/#home">
              Terms
            </a>
            <a className="text-muted" href="/#contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
