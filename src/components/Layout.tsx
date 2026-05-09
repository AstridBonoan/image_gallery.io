import { useCallback, useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { SideNav } from './SideNav'

const SITE_TITLE = 'Lens & Light'

/** Header row ~py-3 + h-11 control — keeps first paint as header + hero only (footer below fold). */
const MAIN_MIN_HOME = 'min-h-[calc(100dvh-5rem)]'

export function Layout() {
  const [navOpen, setNavOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const { pathname } = useLocation()
  const isHome = pathname === '/' || pathname === ''

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

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => {
      if (mq.matches) setNavOpen(false)
    }
    mq.addEventListener('change', onChange)
    onChange()
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <div className="flex min-h-dvh flex-col">
      <Header
        ref={menuButtonRef}
        siteTitle={SITE_TITLE}
        menuOpen={navOpen}
        onOpenNav={() => setNavOpen(true)}
      />
      <SideNav open={navOpen} onClose={closeNav} siteTitle={SITE_TITLE} />

      <main
        className={
          isHome
            ? `flex flex-1 flex-col ${MAIN_MIN_HOME}`
            : 'flex min-h-0 flex-1 flex-col'
        }
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
