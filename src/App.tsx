import { Route, Routes, Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home.tsx'
import PurchasePage from './pages/PurchasePage.tsx'
import RefinancePage from './pages/RefinancePage.tsx'
import AccessEquityPage from './pages/AccessEquityPage.tsx'
import LoanOptionsPage from './pages/LoanOptionsPage.tsx'
import MarketsServedPage from './pages/MarketsServedPage.tsx'
import TeamPage from './pages/TeamPage.tsx'
import RequestQuotePage from './pages/RequestQuotePage.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import TermsOfUse from './pages/TermsOfUse.tsx'
import MethodLendingChatbot from './components/MethodLendingChatbot.tsx'

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
        target.classList.add('section-highlight')
        window.setTimeout(() => {
          target.classList.remove('section-highlight')
        }, 800)
      }, 0)
    }
  }, [location.pathname, location.hash])

  return null
}

function App() {
  const location = useLocation()
  useEffect(() => {
    document.title = 'Method Lending'
  }, [location.pathname])
  useEffect(() => {
    const shouldAnimate = location.pathname !== '/request-quote'
    const sections = Array.from(document.querySelectorAll('main > section'))

    if (!shouldAnimate) {
      sections.forEach((section) => section.classList.remove('scroll-reveal', 'is-visible'))
      return
    }

    sections.forEach((section) => section.classList.add('scroll-reveal'))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sections.forEach((section) => section.classList.add('is-visible'))
      return
    }

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect()
      if (rect.bottom > 0 && rect.top < viewportHeight) {
        section.classList.add('is-visible')
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -5% 0px' }
    )

    sections.forEach((section) => {
      if (!section.classList.contains('is-visible')) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [location.pathname])
  const closeMobileNav = () => {
    const nav = document.getElementById('mainNav')
    if (nav?.classList.contains('show')) {
      const toggler = document.querySelector<HTMLButtonElement>('.navbar-toggler')
      toggler?.click()
    }
  }
  const footerSectionsByPath: Record<string, { label: string; href: string }[]> = {
    '/': [
      { label: 'Hero', href: '/#home' },
      { label: 'Solutions', href: '/#solutions' },
      { label: 'Contact', href: '/#contact' },
    ],
    '/purchase': [
      { label: 'Overview', href: '/purchase#purchase-hero' },
      { label: 'Highlights', href: '/purchase#purchase-highlights' },
      { label: 'Loan/DSCR Calc', href: '/purchase#purchase-calculator' },
      { label: 'Request a Quote', href: '/purchase#purchase-cta' },
    ],
    '/refinance': [
      { label: 'Overview', href: '/refinance#refinance-hero' },
      { label: 'Why Refi?', href: '/refinance#refinance-reasons' },
      { label: 'Refi Calculator', href: '/refinance#refinance-savings-calculator' },
      { label: 'Request a Quote', href: '/refinance#refinance-cta' },
    ],
    '/access-equity': [
      { label: 'Overview', href: '/access-equity#access-equity-hero' },
      { label: 'Cashout Refi', href: '/access-equity#access-equity-cashout' },
      { label: 'Cashout Benefits', href: '/access-equity#access-equity-benefits' },
      { label: 'Cashout Calc', href: '/access-equity#access-equity-calc' },
      { label: 'Request a Quote', href: '/access-equity#access-equity-cta' },
    ],
    '/loan-options': [
      { label: 'Overview', href: '/loan-options#loan-options-hero' },
      { label: 'Compare Options', href: '/loan-options#loan-options-compare' },
    ],
    '/markets-served': [
      { label: 'Overview', href: '/markets-served#markets-hero' },
      { label: 'Coverage Map', href: '/markets-served#markets-map' },
      { label: 'State List', href: '/markets-served#markets-grid' },
      { label: 'Disclaimer', href: '/markets-served#markets-disclaimer' },
    ],
    '/team': [
      { label: 'Overview', href: '/team#team-hero' },
      { label: 'Leadership', href: '/team#team-leadership' },
    ],
    '/request-quote': [
      { label: 'Overview', href: '/request-quote#request-hero' },
      { label: 'Schedule a Meeting', href: '/request-quote#request-connect' },
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
            className="navbar-toggler navbar-toggler--animated"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-line" />
            <span className="navbar-toggler-line" />
            <span className="navbar-toggler-line" />
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2 gap-lg-4">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  to="/"
                  onClick={closeMobileNav}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  to="/purchase"
                  onClick={closeMobileNav}
                >
                  Purchase
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  to="/refinance"
                  onClick={closeMobileNav}
                >
                  Refinance
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  to="/access-equity"
                  onClick={closeMobileNav}
                >
                  Access Equity
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  to="/loan-options"
                  onClick={closeMobileNav}
                >
                  Loan Options
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  to="/markets-served"
                  onClick={closeMobileNav}
                >
                  Markets Served
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  to="/team"
                  onClick={closeMobileNav}
                >
                  Our Team
                </NavLink>
              </li>
            </ul>
            <div className="d-flex flex-column flex-lg-row gap-2 ms-lg-3">
              <Link className="btn btn-primary w-100 w-lg-auto" to="/request-quote" onClick={closeMobileNav}>
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/refinance" element={<RefinancePage />} />
        <Route path="/access-equity" element={<AccessEquityPage />} />
        <Route path="/loan-options" element={<LoanOptionsPage />} />
        <Route path="/markets-served" element={<MarketsServedPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/request-quote" element={<RequestQuotePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>

      <MethodLendingChatbot />

      <footer className="footer border-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3">
              <img className="footer-logo mb-3" src="/images/Method%20Logo%20Trace.png" alt="Method logo" />
              <div className="text-muted">© 2026 Method Lending</div>
            </div>
            <div className="col-lg-5">
              <p className="text-muted mb-3 text-center">
                Business-purpose financing only. No consumer mortgage services offered. No loan
                applications accepted through this website. Licensing pending.
              </p>
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
                    <Link className="text-muted" to="/access-equity">
                      Access Equity
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
