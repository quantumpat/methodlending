import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

type MenuLink = { to: string; title: string; desc: string }
type Menu = {
  id: string
  label: string
  wide?: boolean
  eyebrow?: string
  links: MenuLink[]
  note?: boolean
}

const menus: Menu[] = [
  {
    id: 'refinance',
    label: 'Refinance',
    links: [
      { to: '/refinance', title: 'Rate & Term Refinance', desc: 'Change your rate or loan term' },
      { to: '/access-equity', title: 'Cash-Out Refinance', desc: 'Access equity for your next investment' },
    ],
  },
  {
    id: 'fix-build',
    label: 'Fix & Build',
    wide: true,
    eyebrow: 'SHORT-TERM INVESTOR FINANCING',
    links: [
      { to: '/fix-and-flip', title: 'Fix & Flip', desc: 'Buy, renovate, and sell' },
      { to: '/rehab-loans', title: 'Rehab / Renovate-to-Rent', desc: 'Renovate a property to hold as a rental' },
      { to: '/ground-up-construction', title: 'Ground-Up Construction', desc: 'Build new investment properties' },
    ],
    note: true,
  },
]

const MOBILE_QUERY = '(max-width: 1100px)'
const CLOSE_DELAY_MS = 150

const isDesktop = () => !window.matchMedia(MOBILE_QUERY).matches
const canHover = () => window.matchMedia('(hover: hover)').matches

const normalize = (path: string) => path.replace(/\/+$/, '') || '/'

const Chevron = () => (
  <svg className="ml-chevron" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M2 3.5l3 3 3-3" />
  </svg>
)

type MenuState = { path: string; open: string[]; menuOpen: boolean }

const SiteHeader = () => {
  const location = useLocation()
  const here = normalize(location.pathname)

  // State is tied to the page it was set on, so any navigation closes the menus
  const [state, setState] = useState<MenuState>({ path: here, open: [], menuOpen: false })
  const current = state.path === here ? state : { path: here, open: [] as string[], menuOpen: false }
  const { open, menuOpen } = current
  const update = useCallback(
    (change: (prev: { open: string[]; menuOpen: boolean }) => { open: string[]; menuOpen: boolean }) =>
      setState((prev) => {
        const base = prev.path === here ? prev : { path: here, open: [], menuOpen: false }
        return { path: here, ...change(base) }
      }),
    [here]
  )

  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const closeTimers = useRef<Record<string, number>>({})
  const openedByHover = useRef<Record<string, boolean>>({})

  const activeMenuId = menus.find((menu) => menu.links.some((link) => link.to === here))?.id

  const setMenuOpen = useCallback(
    (next: boolean) => {
      // On mobile, show the current section's links when the menu opens
      update(() => ({ menuOpen: next, open: next && activeMenuId ? [activeMenuId] : [] }))
    },
    [update, activeMenuId]
  )

  const closeEverything = () => update(() => ({ open: [], menuOpen: false }))

  useEffect(() => {
    const timers = closeTimers.current
    return () => Object.values(timers).forEach((timer) => window.clearTimeout(timer))
  }, [])

  // Close on outside click
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (headerRef.current?.contains(event.target as Node)) return
      if (isDesktop()) update((prev) => ({ ...prev, open: [] }))
      else update((prev) => (prev.menuOpen ? { open: [], menuOpen: false } : prev))
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [update])

  // Escape closes the open dropdown (desktop) or the menu panel (mobile)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      if (isDesktop() && open.length > 0) {
        const id = open[0]
        update((prev) => ({ ...prev, open: [] }))
        triggerRefs.current[id]?.focus()
      } else if (!isDesktop() && menuOpen) {
        update(() => ({ open: [], menuOpen: false }))
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, menuOpen, update])

  // Reset when switching between desktop and mobile layouts
  useEffect(() => {
    const query = window.matchMedia(MOBILE_QUERY)
    const handleChange = () => update(() => ({ open: [], menuOpen: false }))
    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [update])

  const handleTriggerClick = (id: string) => {
    const isOpen = open.includes(id)
    if (isOpen && openedByHover.current[id]) {
      // Pointer already opened it; a click keeps it open
      openedByHover.current[id] = false
      return
    }
    update((prev) => {
      const others = isDesktop() ? [] : prev.open.filter((openId) => openId !== id)
      return { ...prev, open: isOpen ? others : [...others, id] }
    })
  }

  const handleItemEnter = (id: string) => {
    if (!isDesktop() || !canHover()) return
    window.clearTimeout(closeTimers.current[id])
    if (!open.includes(id)) openedByHover.current[id] = true
    update((prev) => ({ ...prev, open: [id] }))
  }

  const handleItemLeave = (id: string) => {
    if (!isDesktop() || !canHover()) return
    closeTimers.current[id] = window.setTimeout(() => {
      update((prev) => ({ ...prev, open: prev.open.filter((openId) => openId !== id) }))
      openedByHover.current[id] = false
    }, CLOSE_DELAY_MS)
  }

  const currentPage = (to: string) => (normalize(to) === here ? 'page' : undefined)

  return (
    <header ref={headerRef} className={`ml-header${menuOpen ? ' is-open' : ''}`}>
      <div className="ml-header__inner">
        <Link className="ml-logo" to="/" aria-label="Method Lending home" onClick={closeEverything}>
          <img src="/images/Method%20Logo%20Trace.png" alt="Method Lending" />
        </Link>

        {/* Phone/tablet only: quote button + menu icon */}
        <div className="ml-header__mobile-actions">
          <Link className="ml-btn ml-btn--sm" to="/request-quote" onClick={closeEverything}>
            Request a Quote
          </Link>
          <button
            ref={toggleRef}
            className="ml-menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="ml-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="ml-icon-open" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 6h16M3 11h16M3 16h16" />
            </svg>
            <svg className="ml-icon-close" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 5l12 12M17 5L5 17" />
            </svg>
          </button>
        </div>

        <nav className="ml-nav" id="ml-nav" aria-label="Main">
          <ul className="ml-nav__list">
            <li className="ml-nav__item">
              <Link className="ml-nav__link" to="/purchase" aria-current={currentPage('/purchase')} onClick={closeEverything}>
                Purchase
              </Link>
            </li>

            {menus.map((menu) => (
              <li
                key={menu.id}
                className={`ml-nav__item ml-nav__item--has-menu${activeMenuId === menu.id ? ' is-active' : ''}`}
                onMouseEnter={() => handleItemEnter(menu.id)}
                onMouseLeave={() => handleItemLeave(menu.id)}
              >
                <button
                  ref={(element) => {
                    triggerRefs.current[menu.id] = element
                  }}
                  className="ml-nav__trigger"
                  type="button"
                  aria-expanded={open.includes(menu.id)}
                  aria-controls={`ml-menu-${menu.id}`}
                  onClick={() => handleTriggerClick(menu.id)}
                >
                  {menu.label}
                  <Chevron />
                </button>
                <div className={`ml-dropdown${menu.wide ? ' ml-dropdown--wide' : ''}`} id={`ml-menu-${menu.id}`}>
                  {menu.eyebrow && <p className="ml-dropdown__label">{menu.eyebrow}</p>}
                  <ul className="ml-dropdown__links">
                    {menu.links.map((link) => (
                      <li key={link.to}>
                        <Link
                          className="ml-dropdown__link"
                          to={link.to}
                          aria-current={currentPage(link.to)}
                          onClick={closeEverything}
                        >
                          <span className="ml-dropdown__title">{link.title}</span>
                          <span className="ml-dropdown__desc">{link.desc}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {menu.note && (
                    <p className="ml-dropdown__note">
                      Availability varies by state.{' '}
                      <Link to="/markets-served" onClick={closeEverything}>
                        See Markets Served
                      </Link>
                    </p>
                  )}
                </div>
              </li>
            ))}

            <li className="ml-nav__item">
              <Link
                className="ml-nav__link"
                to="/loan-programs"
                aria-current={currentPage('/loan-programs')}
                onClick={closeEverything}
              >
                Loan Programs
              </Link>
            </li>

            <li className="ml-nav__item">
              <Link
                className="ml-nav__link"
                to="/markets-served"
                aria-current={currentPage('/markets-served')}
                onClick={closeEverything}
              >
                Markets Served
              </Link>
            </li>

            <li className="ml-nav__item">
              <Link className="ml-nav__link" to="/team" aria-current={currentPage('/team')} onClick={closeEverything}>
                Our Team
              </Link>
            </li>

            {/* Desktop: button at the right end. Mobile: full-width button at the bottom of the menu */}
            <li className="ml-nav__item ml-nav__item--cta">
              <Link className="ml-btn" to="/request-quote" onClick={closeEverything}>
                Request a Quote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
