import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Module-level so StrictMode's double-invoked effects can't fire twice for one navigation
let lastPath: string | null = null

// The base Pixel code in index.html sends the first PageView; this sends one per later route change
const usePixelPageView = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    if (lastPath === null) {
      lastPath = pathname
      return
    }
    if (pathname === lastPath) return
    lastPath = pathname
    window.fbq?.('track', 'PageView')
  }, [pathname])
}

export default usePixelPageView
