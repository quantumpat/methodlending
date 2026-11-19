import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import routeMeta from '../routeMeta.json'

const metaByPath = new Map(routeMeta.map((route) => [route.path, route]))

// Keeps <title> and the meta description in step with the static per-route heads on client-side navigation
const usePageMeta = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = metaByPath.get(pathname.replace(/\/+$/, '') || '/') ?? metaByPath.get('/')
    if (!meta) return
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
  }, [pathname])
}

export default usePageMeta
