const phoneDisplay = '(555) 014-9271'
const phoneHref = 'tel:+15550149271'

const social = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: FacebookIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: InstagramIcon,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/',
    icon: TikTokIcon,
  },
] as const

export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10 bg-[var(--color-paper-dark)] text-[#e8e6e3]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">Book a session</p>
          <a
            href={phoneHref}
            className="mt-1 inline-flex text-[15px] text-[var(--color-accent-soft)] underline-offset-4 hover:underline"
          >
            {phoneDisplay}
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:justify-end">
          <span className="sr-only">Social links</span>
          {social.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-[var(--color-accent)] hover:bg-white/10 hover:text-[var(--color-accent-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Lens & Light Photography. All rights reserved.
      </div>
    </footer>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.5c-.83 0-1.5.67-1.5 1.5V12h3l-.5 3H14v7.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v9.26a2.592 2.592 0 1 1-2.59-2.59c.09 0 .17.01.26.02v-3.12a5.67 5.67 0 0 0-.26-.01A5.63 5.63 0 0 0 4 12.07 5.63 5.63 0 0 0 9.63 17.7a5.63 5.63 0 0 0 5.63-5.63V8.06a6.67 6.67 0 0 0 4.34 1.63V6.58a4.31 4.31 0 0 1-3-1.76z" />
    </svg>
  )
}
