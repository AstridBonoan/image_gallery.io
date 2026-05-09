/**
 * Validates gallery assets: HEAD-checks Unsplash URLs and verifies local files under public/gallery/.
 * Usage: node scripts/verify-gallery-urls.mjs
 */
import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import https from 'node:https'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const galleryTs = readFileSync(join(root, 'src', 'data', 'gallery.ts'), 'utf8')

const unsplashRe = /u\('(photo-[^']+)'\)/g
const unsplashIds = [...new Set([...galleryTs.matchAll(unsplashRe)].map((m) => m[1]))]

const localRe = /localGallery\('([^']+)'\)/g
const localFiles = [...new Set([...galleryTs.matchAll(localRe)].map((m) => m[1]))]

const q = '?auto=format&fit=crop&w=900&h=1200&q=85'

function head(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { method: 'HEAD', timeout: 15000 }, (res) => {
        res.resume()
        resolve(res.statusCode ?? 0)
      })
      .on('error', reject)
  })
}

let failed = false

for (const id of unsplashIds) {
  const url = `https://images.unsplash.com/${id}${q}`
  try {
    const code = await head(url)
    if (code !== 200) {
      console.error(`Unsplash ${id} -> HTTP ${code}`)
      failed = true
    } else {
      console.log(`Unsplash ${id} OK`)
    }
  } catch (e) {
    console.error(`Unsplash ${id} -> ${e.message}`)
    failed = true
  }
}

for (const file of localFiles) {
  const abs = join(root, 'public', 'gallery', file)
  if (!existsSync(abs)) {
    console.error(`Missing local file: public/gallery/${file}`)
    failed = true
  } else {
    console.log(`Local gallery/${file} OK`)
  }
}

if (failed) {
  process.exit(1)
}
