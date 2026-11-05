import { useEffect, useId, useRef, useState, type CSSProperties, type FocusEvent, type KeyboardEvent } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { loanOptionLinks } from './loanOptionLinks'

const CLOSE_DELAY_MS = 160

// The navbar collapses below Bootstrap's xxl breakpoint, where the menu becomes an inline accordion
const isDesktopHover = () =>
  window.matchMedia('(min-width: 1400px) and (hover: hover)').matches

type LoanOptionsMenuProps = {
  onNavigate: () => void
}

const LoanOptionsMenu = ({ onNavigate }: LoanOptionsMenuProps) => {
  // Remember which page the menu was opened on so navigating anywhere closes it
  const location = useLocation()
  const [openedOn, setOpenedOn] = useState<string | null>(null)
  const isOpen = openedOn === location.pathname
  const setIsOpen = (open: boolean) => setOpenedOn(open ? location.pathname : null)
  const closeTimer = useRef<number | undefined>(undefined)
  const containerRef = useRef<HTMLLIElement>(null)
  const menuId = useId()
  const isSectionActive = loanOptionLinks.some((link) => link.to === location.pathname)

  const cancelClose = () => window.clearTimeout(closeTimer.current)

  useEffect(() => cancelClose, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }
    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpenedOn(null)
      }
    }
    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [isOpen])

  const handleMouseEnter = () => {
    if (!isDesktopHover()) {
      return
    }
    cancelClose()
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    if (!isDesktopHover()) {
      return
    }
    cancelClose()
    closeTimer.current = window.setTimeout(() => setIsOpen(false), CLOSE_DELAY_MS)
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false)
      containerRef.current?.querySelector<HTMLButtonElement>('.loan-menu__trigger')?.focus()
    }
  }

  const handleBlur = (event: FocusEvent) => {
    if (!containerRef.current?.contains(event.relatedTarget as Node)) {
      setIsOpen(false)
    }
  }

  return (
    <li
      ref={containerRef}
      className={`nav-item loan-menu${isOpen ? ' is-open' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      <button
        type="button"
        className={`nav-link loan-menu__trigger${isSectionActive ? ' active' : ''}`}
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => {
          cancelClose()
          setIsOpen(!isOpen)
        }}
      >
        Loan Options
        <svg className="loan-menu__chevron" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="loan-menu__panel" id={menuId}>
        <div className="loan-menu__inner">
          <ul className="loan-menu__list">
            {loanOptionLinks.map((link, index) => (
              <li key={link.to} style={{ '--item-index': index } as CSSProperties}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `loan-menu__item${isActive ? ' is-active' : ''}`}
                  tabIndex={isOpen ? undefined : -1}
                  onClick={() => {
                    setIsOpen(false)
                    onNavigate()
                  }}
                >
                  <span className="loan-menu__item-label">{link.label}</span>
                  <span className="loan-menu__item-description">{link.description}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}

export default LoanOptionsMenu
