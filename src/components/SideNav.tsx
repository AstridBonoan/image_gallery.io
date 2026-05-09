import { NavLink } from 'react-router-dom'
import { categories } from '../data/gallery'

type SideNavProps = {
  open: boolean
  onClose: () => void
  siteTitle: string
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'block rounded-lg px-3 py-2 text-[15px] font-medium transition-colors',
    isActive
      ? 'bg-[var(--color-accent-soft)] text-[var(--color-ink)]'
      : 'text-[var(--color-ink-muted)] hover:bg-black/5 hover:text-[var(--color-ink)]',
  ].join(' ')

const subLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'block rounded-md py-2 pl-8 pr-3 text-[14px] transition-colors',
    isActive ? 'font-semibold text-[var(--color-accent)]' : 'text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]',
  ].join(' ')

export function SideNav({ open, onClose, siteTitle }: SideNavProps) {
  return (
    <>
      <div
        role="presentation"
        className={[
          'fixed inset-0 z-40 bg-black/45 transition-opacity duration-300 ease-out',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        onClick={onClose}
        aria-hidden={!open}
      />

      <aside
        id="mobile-navigation-panel"
        className={[
          'fixed top-0 right-0 z-50 flex h-full w-[min(100%,20rem)] flex-col border-l border-black/10 bg-[var(--color-paper)] shadow-2xl transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between gap-3 border-b border-black/10 px-4 py-3">
          <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-ink)]">
            {siteTitle}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-ink)] transition hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            aria-label="Close navigation"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4" aria-label="Primary">
          <NavLink to="/" end onClick={onClose} className={navLinkClass}>
            About
          </NavLink>

          <div className="pt-1">
            <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-muted)]">
              Gallery
            </p>
            <NavLink to="/gallery" end onClick={onClose} className={subLinkClass}>
              All images
            </NavLink>
            {categories.map((c) => (
              <NavLink key={c.id} to={`/gallery/${c.id}`} onClick={onClose} className={subLinkClass}>
                {c.label}
              </NavLink>
            ))}
          </div>

          <NavLink to="/contact" onClick={onClose} className={navLinkClass}>
            Contact
          </NavLink>
        </nav>
      </aside>
    </>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
