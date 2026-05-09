const portraitSrc = 'https://picsum.photos/seed/lensportrait/600/760'

export function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <p className="text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)] sm:text-xs">
        Photography & visual stories
      </p>
      <h1 className="mt-1.5 text-center font-[family-name:var(--font-display)] text-2xl leading-tight text-[var(--color-ink)] sm:text-3xl lg:text-4xl">
        Moments worth keeping
      </h1>

      <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8 lg:mt-10 lg:grid-cols-2 lg:items-start lg:gap-10">
        <figure className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_12px_40px_-16px_rgba(0,0,0,0.22)] sm:rounded-2xl">
            <img
              src={portraitSrc}
              alt="Portrait of the photographer holding a camera"
              width={600}
              height={760}
              className="mx-auto max-h-[38vh] w-auto max-w-full object-cover sm:max-h-[40vh] lg:max-h-[min(380px,calc(100dvh-11rem))]"
              loading="eager"
              decoding="async"
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-[var(--color-ink-muted)] lg:text-left">
            Jordan Avery · Lens & Light Photography
          </figcaption>
        </figure>

        <div className="space-y-3 text-left text-[15px] leading-snug text-[var(--color-ink-muted)] sm:text-[16px] sm:leading-relaxed lg:space-y-3.5 lg:pt-0.5">
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
    </div>
  )
}
