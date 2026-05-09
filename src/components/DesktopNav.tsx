import { NavLink, useLocation } from 'react-router-dom'
import { categories } from '../data/gallery'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-lg px-3 py-2 text-[15px] font-medium transition-colors',
    isActive
      ? 'text-[var(--color-accent)]'
      : 'text-[var(--color-ink-muted)] hover:bg-black/5 hover:text-[var(--color-ink)]',
  ].join(' ')

const dropdownLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'block px-4 py-2 text-[14px] transition-colors',
    isActive
      ? 'bg-[var(--color-accent-soft)] font-semibold text-[var(--color-ink)]'
      : 'text-[var(--color-ink-muted)] hover:bg-black/5 hover:text-[var(--color-ink)]',
  ].join(' ')

export function DesktopNav() {
  const { pathname } = useLocation()

  const galleryTriggerClass =
    pathname === '/gallery' || pathname.startsWith('/gallery/')
      ? 'text-[var(--color-accent)]'
      : 'text-[var(--color-ink-muted)] hover:bg-black/5 hover:text-[var(--color-ink)]'

  return (
    <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
      <NavLink to="/" end className={linkClass}>
        About
      </NavLink>

      <div className="group relative">
        <NavLink
          to="/gallery"
          className={`inline-flex items-center gap-0.5 rounded-lg px-3 py-2 text-[15px] font-medium transition-colors ${galleryTriggerClass}`}
        >
          Gallery
          <ChevronDown className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
        </NavLink>

        <div
          className="invisible absolute left-1/2 top-full z-40 mt-1 min-w-[13rem] -translate-x-1/2 rounded-xl border border-black/10 bg-[var(--color-paper)] py-1 opacity-0 shadow-lg ring-1 ring-black/5 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
          role="menu"
          aria-label="Gallery categories"
        >
          <NavLink to="/gallery" end role="menuitem" className={dropdownLinkClass}>
            All images
          </NavLink>
          {categories.map((c) => (
            <NavLink key={c.id} to={`/gallery/${c.id}`} role="menuitem" className={dropdownLinkClass}>
              {c.label}
            </NavLink>
          ))}
        </div>
      </div>

      <NavLink to="/contact" className={linkClass}>
        Contact
      </NavLink>
    </nav>
  )
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
