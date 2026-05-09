import { useCallback, useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { SideNav } from './SideNav'

const SITE_TITLE = 'Lens & Light'

export function Layout() {
  const [navOpen, setNavOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  /** Move focus to the menu trigger before hiding the panel so nothing focused stays under aria-hidden. */
  const closeNav = useCallback(() => {
    menuButtonRef.current?.focus()
    setNavOpen(false)
  }, [])

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [navOpen])

  useEffect(() => {
    if (!navOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeNav()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navOpen, closeNav])

  return (
    <div className="flex min-h-dvh flex-col">
      <Header
        ref={menuButtonRef}
        siteTitle={SITE_TITLE}
        menuOpen={navOpen}
        onOpenNav={() => setNavOpen(true)}
      />
      <SideNav open={navOpen} onClose={closeNav} siteTitle={SITE_TITLE} />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
