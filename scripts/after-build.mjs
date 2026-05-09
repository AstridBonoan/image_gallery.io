import { copyFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const dist = join(root, 'dist')
copyFileSync(join(dist, 'index.html'), join(dist, '404.html'))
