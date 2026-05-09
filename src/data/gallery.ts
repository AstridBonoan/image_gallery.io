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

/** Cropped portrait-ish tiles for the gallery grid (Unsplash allows hotlinking for demos). */
const u = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=900&h=1200&q=85`

const automobile: GalleryImage[] = [
  {
    id: 'automobile-1',
    categoryId: 'automobile',
    title: 'Classic coupe at dusk',
    src: u('photo-1492144534655-ae79c964c9d7'),
    alt: 'Silver classic sports car parked at sunset',
  },
  {
    id: 'automobile-2',
    categoryId: 'automobile',
    title: 'Performance on the road',
    src: u('photo-1503376780353-7e6692767b70'),
    alt: 'Silver sports car on an open road',
  },
  {
    id: 'automobile-3',
    categoryId: 'automobile',
    title: 'Supercar detail',
    src: u('photo-1583121274602-3e2820c69888'),
    alt: 'Red sports car front detail and headlight',
  },
  {
    id: 'automobile-4',
    categoryId: 'automobile',
    title: 'Night drive in the city',
    src: u('photo-1544636331-e26879cd4d9b'),
    alt: 'Luxury car driving through a lit city tunnel at night',
  },
]

const graduation: GalleryImage[] = [
  {
    id: 'graduation-1',
    categoryId: 'graduation',
    title: 'Caps in the air',
    src: u('photo-1523240795612-9a054b0db644'),
    alt: 'Graduates tossing caps in celebration outdoors',
  },
  {
    id: 'graduation-2',
    categoryId: 'graduation',
    title: 'Cheering at commencement',
    src: u('photo-1546519638-68e109498ffc'),
    alt: 'Graduates in caps and gowns cheering together at commencement',
  },
  {
    id: 'graduation-3',
    categoryId: 'graduation',
    title: 'Friends on campus',
    src: u('photo-1571260899304-425eee4c7efc'),
    alt: 'Graduates in gowns celebrating together on campus',
  },
  {
    id: 'graduation-4',
    categoryId: 'graduation',
    title: 'Ceremony crowd',
    src: u('photo-1544531586-fde5298cdd40'),
    alt: 'Graduation ceremony with graduates in caps and gowns seated',
  },
]

const weddings: GalleryImage[] = [
  {
    id: 'weddings-1',
    categoryId: 'weddings',
    title: 'First dance',
    src: u('photo-1519741497674-611481863552'),
    alt: 'Bride and groom dancing closely at reception',
  },
  {
    id: 'weddings-2',
    categoryId: 'weddings',
    title: 'Rings and bouquet',
    src: u('photo-1511285560929-80b456fea0bc'),
    alt: 'Wedding rings on a bouquet of flowers',
  },
  {
    id: 'weddings-3',
    categoryId: 'weddings',
    title: 'Outdoor vows',
    src: u('photo-1465495976277-4387d4b0b4c6'),
    alt: 'Wedding couple embracing outdoors with greenery',
  },
  {
    id: 'weddings-4',
    categoryId: 'weddings',
    title: 'Celebration moment',
    src: u('photo-1519225421980-715cb0215aed'),
    alt: 'Happy bride and groom laughing together during outdoor reception',
  },
]

/** Single-category arrays for filtering */
export const imagesByCategory: Record<GalleryCategoryId, GalleryImage[]> = {
  automobile,
  graduation,
  weddings,
}

/** Flat list used by category routes — preserves theme grouping */
export const galleryImages: GalleryImage[] = [...automobile, ...graduation, ...weddings]

/** Interleaved mix for “All images” so each row feels varied */
export const galleryImagesInterleaved: GalleryImage[] = (() => {
  const maxLen = Math.max(automobile.length, graduation.length, weddings.length)
  const out: GalleryImage[] = []
  for (let i = 0; i < maxLen; i++) {
    if (automobile[i]) out.push(automobile[i])
    if (weddings[i]) out.push(weddings[i])
    if (graduation[i]) out.push(graduation[i])
  }
  return out
})()

export function getCategoryById(id: string): GalleryCategory | undefined {
  return categories.find((c) => c.id === id)
}

export function getImagesForCategory(categoryId: string | undefined): GalleryImage[] {
  if (!categoryId) return galleryImagesInterleaved
  if (categoryId === 'automobile' || categoryId === 'graduation' || categoryId === 'weddings') {
    return imagesByCategory[categoryId]
  }
  return []
}
