import { Route, Routes, Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home.tsx'
import PurchasePage from './pages/PurchasePage.tsx'
import RefinancePage from './pages/RefinancePage.tsx'
import LoanOptionsPage from './pages/LoanOptionsPage.tsx'
import TeamPage from './pages/TeamPage.tsx'
import RequestQuotePage from './pages/RequestQuotePage.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import TermsOfUse from './pages/TermsOfUse.tsx'

const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
    }

    const elementId = location.hash.replace('#', '')
    const target = document.getElementById(elementId)

    if (target) {
      window.setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 0)
    }
  }, [location.pathname, location.hash])

  return null
}

function App() {
  const location = useLocation()
  const footerSectionsByPath: Record<string, { label: string; href: string }[]> = {
    '/': [
      { label: 'Hero', href: '/#home' },
      { label: 'Solutions', href: '/#solutions' },
      { label: 'Process', href: '/#process' },
      { label: 'Contact', href: '/#contact' },
    ],
    '/purchase': [
      { label: 'Overview', href: '/purchase#purchase-hero' },
      { label: 'Why Method', href: '/purchase#purchase-benefits' },
    ],
    '/refinance': [
      { label: 'Overview', href: '/refinance#refinance-hero' },
      { label: 'Benefits', href: '/refinance#refinance-benefits' },
    ],
    '/loan-options': [
      { label: 'Overview', href: '/loan-options#loan-options-hero' },
      { label: 'Compare Options', href: '/loan-options#loan-options-compare' },
    ],
    '/team': [
      { label: 'Overview', href: '/team#team-hero' },
      { label: 'Leadership', href: '/team#team-leadership' },
    ],
    '/request-quote': [
      { label: 'Schedule a Meeting', href: '/request-quote#request-hero' },
      { label: 'Next Steps', href: '/request-quote#request-next' },
    ],
    '/privacy-policy': [
      { label: 'Privacy Policy', href: '/privacy-policy#privacy-policy' },
    ],
    '/terms-of-use': [
      { label: 'Terms of Use', href: '/terms-of-use#terms-of-use' },
    ],
  }
  const footerSections = footerSectionsByPath[location.pathname] ?? footerSectionsByPath['/']

  return (
    <div className="page">
      <ScrollToTop />
      <header className="navbar navbar-expand-lg bg-white border-bottom sticky-top shadow-sm">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img className="navbar-logo" src="/images/Method%20Logo%20Trace.png" alt="Method logo" />
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2 gap-lg-4">
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/purchase">
                  Purchase
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/refinance">
                  Refinance
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/loan-options">
                  Loan Options
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/team">
                  Our Team
                </NavLink>
              </li>
            </ul>
            <Link className="btn btn-primary ms-lg-3" to="/request-quote">
              Request a Quote
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
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>

      <footer className="footer border-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3">
              <img className="footer-logo mb-3" src="/images/Method%20Logo%20Trace.png" alt="Method logo" />
              <div className="text-muted">© 2026 Method Lending</div>
            </div>
            <div className="col-lg-5">
              <p className="text-muted mb-0 hidden">
                Method Lending is a mortgage brokerage company. NMLS #2753300. Licensed by the California
                Department of Financial Protection and Innovation under the California Residential Mortgage
                Lending Act. Equal Housing Opportunity. For licensing information, visit{' '}
                <a className="text-muted" href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noreferrer">
                  NMLS Consumer Access
                </a>
                .
              </p>
            </div>
            <div className="col-lg-4">
              <div className="row gy-3">
                <div className="col-6">
                  <div className="footer-heading text-uppercase text-muted">Pages</div>
                  <div className="footer-links d-flex flex-column gap-2">
                    <Link className="text-muted" to="/">
                      Home
                    </Link>
                    <Link className="text-muted" to="/purchase">
                      Purchase
                    </Link>
                    <Link className="text-muted" to="/refinance">
                      Refinance
                    </Link>
                    <Link className="text-muted" to="/loan-options">
                      Loan Options
                    </Link>
                    <Link className="text-muted" to="/team">
                      Our Team
                    </Link>
                    <Link className="text-muted" to="/request-quote">
                      Request a Quote
                    </Link>
                    <Link className="text-muted" to="/privacy-policy">
                      Privacy Policy
                    </Link>
                    <Link className="text-muted" to="/terms-of-use">
                      Terms of Use
                    </Link>
                  </div>
                </div>
                <div className="col-6">
                  <div className="footer-heading text-uppercase text-muted">Sections</div>
                  <div className="footer-links d-flex flex-column gap-2">
                    {footerSections.map((section) => (
                      <Link key={section.href} className="text-muted" to={section.href}>
                        {section.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="col-12 d-flex align-items-center gap-2">
                  <img src="/images/fheo75.gif" alt="Equal Housing Opportunity" />
                  <span className="text-muted">Equal Housing Opportunity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
