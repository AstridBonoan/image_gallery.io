const portraitSrc = 'https://picsum.photos/seed/lensportrait/600/760'

export function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
        Photography & visual stories
      </p>
      <h1 className="mt-2 text-center font-[family-name:var(--font-display)] text-3xl leading-tight text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
        Moments worth keeping
      </h1>

      <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:items-center lg:gap-14">
        <figure className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)]">
            <img
              src={portraitSrc}
              alt="Portrait of the photographer holding a camera"
              width={600}
              height={760}
              className="aspect-[600/760] h-auto w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm text-[var(--color-ink-muted)] lg:text-left">
            Jordan Avery · Lens & Light Photography
          </figcaption>
        </figure>

        <div className="space-y-5 text-left text-[17px] leading-relaxed sm:text-lg">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)] sm:text-3xl">
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
