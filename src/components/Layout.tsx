import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { SideNav } from './SideNav'

const SITE_TITLE = 'Lens & Light'

export function Layout() {
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [navOpen])

  useEffect(() => {
    if (!navOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setNavOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navOpen])

  return (
    <div className="flex min-h-dvh flex-col">
      <Header siteTitle={SITE_TITLE} menuOpen={navOpen} onOpenNav={() => setNavOpen(true)} />
      <SideNav open={navOpen} onClose={() => setNavOpen(false)} siteTitle={SITE_TITLE} />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
