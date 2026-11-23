import { Navigate, Route, Routes, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import './styles/method-site.css'
import Home from './pages/Home.tsx'
import PurchasePage from './pages/PurchasePage.tsx'
import RefinancePage from './pages/RefinancePage.tsx'
import AccessEquityPage from './pages/AccessEquityPage.tsx'
import LoanProgramsPage from './pages/LoanProgramsPage.tsx'
import FixAndFlipPage from './pages/FixAndFlipPage.tsx'
import RehabLoansPage from './pages/RehabLoansPage.tsx'
import GroundUpConstructionPage from './pages/GroundUpConstructionPage.tsx'
import MarketsServedPage from './pages/MarketsServedPage.tsx'
import TeamPage from './pages/TeamPage.tsx'
import RequestQuotePage from './pages/RequestQuotePage.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import TermsOfUse from './pages/TermsOfUse.tsx'
import SiteHeader from './components/SiteHeader.tsx'
import usePageMeta from './hooks/usePageMeta.ts'
import usePixelPageView from './hooks/usePixelPageView.ts'

const footerPages = [
  { to: '/', label: 'Home' },
  { to: '/purchase', label: 'Purchase' },
  { to: '/refinance', label: 'Refinance' },
  { to: '/access-equity', label: 'Access Equity' },
  { to: '/loan-programs', label: 'Loan Programs' },
  { to: '/markets-served', label: 'Markets Served' },
  { to: '/fix-and-flip', label: 'Fix & Flip' },
  { to: '/rehab-loans', label: 'Rehab' },
  { to: '/ground-up-construction', label: 'Ground-Up Construction' },
  { to: '/team', label: 'Our Team' },
  { to: '/request-quote', label: 'Request a Quote' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-of-use', label: 'Terms of Use' },
]

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
  usePageMeta()
  usePixelPageView()
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
  const programSections = (path: string) => [
    { label: 'Overview', href: `${path}#overview` },
    { label: 'Program Highlights', href: `${path}#highlights` },
    { label: 'Request a Quote', href: `${path}#quote` },
  ]
  const footerSectionsByPath: Record<string, { label: string; href: string }[]> = {
    '/fix-and-flip': programSections('/fix-and-flip'),
    '/rehab-loans': programSections('/rehab-loans'),
    '/ground-up-construction': programSections('/ground-up-construction'),
  }
  const footerSections = footerSectionsByPath[location.pathname]

  return (
    <div className="page">
      <ScrollToTop />
      <SiteHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/refinance" element={<RefinancePage />} />
        <Route path="/access-equity" element={<AccessEquityPage />} />
        <Route path="/loan-programs" element={<LoanProgramsPage />} />
        <Route path="/loan-options" element={<Navigate to="/loan-programs" replace />} />
        <Route path="/fix-and-flip" element={<FixAndFlipPage />} />
        <Route path="/rehab-loans" element={<RehabLoansPage />} />
        <Route path="/ground-up-construction" element={<GroundUpConstructionPage />} />
        <Route path="/markets-served" element={<MarketsServedPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/request-quote" element={<RequestQuotePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
        <Route path="/terms" element={<Navigate to="/terms-of-use" replace />} />
        <Route path="/terms-of-service" element={<Navigate to="/terms-of-use" replace />} />
        <Route path="/markets" element={<Navigate to="/markets-served" replace />} />
      </Routes>

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
                applications accepted through this website.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="row gy-3">
                <div className="col-6">
                  <div className="footer-heading text-uppercase text-muted">Pages</div>
                  <div className="footer-links d-flex flex-column gap-2">
                    {footerPages.map((page) => (
                      <Link key={page.to} className="text-muted" to={page.to}>
                        {page.label}
                      </Link>
                    ))}
                  </div>
                </div>
                {footerSections && (
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
                )}
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
