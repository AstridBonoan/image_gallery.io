const portraitSrc = 'https://picsum.photos/seed/lensportrait/600/760'

/** Full viewport below sticky header on lg+ so the footer stays off-screen until scroll. */
const heroViewport =
  'lg:min-h-[calc(100dvh-4.75rem)] lg:max-h-[calc(100dvh-4.75rem)] lg:overflow-hidden'

export function HomePage() {
  return (
    <section
      className={`mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-4 sm:px-6 sm:py-5 lg:px-8 ${heroViewport}`}
    >
      <header className="shrink-0 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)] sm:text-xs">
          Photography & visual stories
        </p>
        <h1 className="mt-1 font-[family-name:var(--font-display)] text-2xl leading-tight text-[var(--color-ink)] sm:text-3xl lg:text-4xl">
          Moments worth keeping
        </h1>
      </header>

      <div className="mt-4 flex min-h-0 flex-1 flex-col gap-5 lg:mt-5 lg:flex-row lg:gap-10 lg:items-stretch">
        <figure className="flex min-h-0 w-full flex-1 flex-col lg:max-w-[50%]">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-black/10 bg-neutral-100 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.22)] sm:rounded-2xl lg:aspect-auto lg:min-h-0 lg:flex-1">
            <img
              src={portraitSrc}
              alt="Portrait of the photographer holding a camera"
              width={600}
              height={760}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
          <figcaption className="mt-2 shrink-0 text-center text-xs text-[var(--color-ink-muted)] lg:text-left">
            Jordan Avery · Lens & Light Photography
          </figcaption>
        </figure>

        <div className="flex min-h-0 flex-1 flex-col justify-center space-y-3 overflow-y-auto text-left text-[15px] leading-snug text-[var(--color-ink-muted)] sm:text-[16px] sm:leading-relaxed lg:max-w-[50%] lg:space-y-3.5 lg:pr-1 lg:pt-0">
          <h2 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-ink)] sm:text-2xl">
            About
          </h2>
          <p>
            I am a photographer focused on people, celebration, and craft — from intimate weddings to
            polished automotive features. My approach blends careful composition with room for real
            emotion so your images feel timeless, not staged.
          </p>
          <p>
            Based in the Pacific Northwest, I work on location and in-studio, tailoring light and color
            to each story. Whether it is a graduation on the quad or a midnight portrait downtown, I
            build calm sessions that leave you with photographs you will want to print.
          </p>
          <p className="text-[var(--color-ink-muted)]">
            Explore the gallery by category, or reach out through the contact form to talk timelines,
            packages, and collaboration.
          </p>
        </div>
      </div>
    </section>
  )
}
