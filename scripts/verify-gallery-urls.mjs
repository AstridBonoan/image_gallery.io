/**
 * HEAD-checks every Unsplash URL in src/data/gallery.ts (run after changing photos).
 * Usage: node scripts/verify-gallery-urls.mjs
 */
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import https from 'node:https'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const src = readFileSync(join(root, 'src', 'data', 'gallery.ts'), 'utf8')
const re = /u\('(photo-[^']+)'\)/g
const ids = [...src.matchAll(re)].map((m) => m[1])
const unique = [...new Set(ids)]

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
for (const id of unique) {
  const url = `https://images.unsplash.com/${id}${q}`
  try {
    const code = await head(url)
    if (code !== 200) {
      console.error(`${id} -> HTTP ${code}`)
      failed = true
    } else {
      console.log(`${id} OK`)
    }
  } catch (e) {
    console.error(`${id} -> ${e.message}`)
    failed = true
  }
}

if (failed) {
  process.exit(1)
}
