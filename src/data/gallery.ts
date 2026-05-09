export type GalleryCategoryId = 'automobile' | 'graduation' | 'weddings'

export type GalleryCategory = {
  id: GalleryCategoryId
  label: string
  description: string
}

export type GalleryImage = {
  id: string
  categoryId: GalleryCategoryId
  title: string
  /** Stable placeholder from picsum.photos */
  src: string
  alt: string
}

export const categories: GalleryCategory[] = [
  {
    id: 'automobile',
    label: 'Automobile',
    description: 'Showroom polish, motion studies, and detail work for brands and collectors.',
  },
  {
    id: 'graduation',
    label: 'Graduation',
    description: 'Caps, gowns, and candid celebration moments on campus and at home.',
  },
  {
    id: 'weddings',
    label: 'Weddings',
    description: 'Ceremony to reception — editorial storytelling with a documentary eye.',
  },
]

const cat = (id: GalleryCategoryId, n: number, title: string, seed: number): GalleryImage => ({
  id: `${id}-${n}`,
  categoryId: id,
  title,
  src: `https://picsum.photos/seed/${seed}/900/1200`,
  alt: title,
})

export const galleryImages: GalleryImage[] = [
  cat('automobile', 1, 'Classic coupe — dusk', 401),
  cat('automobile', 2, 'Track day — motion blur', 402),
  cat('automobile', 3, 'Interior detail', 403),
  cat('automobile', 4, 'City lights reflection', 404),
  cat('graduation', 1, 'Campus portrait', 501),
  cat('graduation', 2, 'Family hug', 502),
  cat('graduation', 3, 'Throwing the cap', 503),
  cat('graduation', 4, 'Diploma moment', 504),
  cat('weddings', 1, 'First look', 601),
  cat('weddings', 2, 'Vows', 602),
  cat('weddings', 3, 'First dance', 603),
  cat('weddings', 4, 'Send-off sparklers', 604),
]

export function getCategoryById(id: string): GalleryCategory | undefined {
  return categories.find((c) => c.id === id)
}

export function getImagesForCategory(categoryId: string | undefined): GalleryImage[] {
  if (!categoryId) return galleryImages
  return galleryImages.filter((img) => img.categoryId === categoryId)
}
