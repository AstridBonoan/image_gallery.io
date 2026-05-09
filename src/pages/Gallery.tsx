import { Navigate, NavLink, useParams } from 'react-router-dom'
import { categories, getCategoryById, getImagesForCategory } from '../data/gallery'

function categoryPillClass({ isActive }: { isActive: boolean }) {
  return [
    'rounded-full border px-4 py-2 text-sm font-medium transition',
    isActive
      ? 'border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-ink)]'
      : 'border-black/10 bg-white text-[var(--color-ink-muted)] hover:border-black/20 hover:text-[var(--color-ink)]',
  ].join(' ')
}

export function GalleryPage() {
  const { categoryId } = useParams<{ categoryId?: string }>()

  if (categoryId && !getCategoryById(categoryId)) {
    return <Navigate to="/gallery" replace />
  }

  const category = categoryId ? getCategoryById(categoryId) : undefined
  const images = getImagesForCategory(categoryId)
  const title = category ? category.label : 'Gallery'
  const blurb =
    category?.description ?? 'Browse the full archive or jump to a subject — automobiles, graduation, and weddings.'

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)] sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-[var(--color-ink-muted)]">{blurb}</p>
      </div>

      <nav className="mt-8 flex flex-wrap gap-2" aria-label="Gallery categories">
        <NavLink to="/gallery" end className={categoryPillClass}>
          All images
        </NavLink>
        {categories.map((c) => (
          <NavLink key={c.id} to={`/gallery/${c.id}`} className={categoryPillClass}>
            {c.label}
          </NavLink>
        ))}
      </nav>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img) => (
          <li key={img.id}>
            <figure className="overflow-hidden rounded-xl border border-black/10 bg-[#111] shadow-sm">
              <img
                src={img.src}
                alt={img.alt}
                width={900}
                height={1200}
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] h-auto w-full object-cover transition duration-500 hover:scale-[1.02]"
              />
              <figcaption className="sr-only">{img.title}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  )
}
