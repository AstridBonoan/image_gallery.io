import { Link } from 'react-router-dom'

type HeaderProps = {
  siteTitle: string
  menuOpen: boolean
  onOpenNav: () => void
}

export function Header({ siteTitle, menuOpen, onOpenNav }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-[var(--color-paper)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-2xl"
        >
          {siteTitle}
        </Link>
        <button
          type="button"
          onClick={onOpenNav}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-[var(--color-ink)] shadow-sm transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation-panel"
          aria-label="Open menu"
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
