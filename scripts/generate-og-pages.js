import fs from 'node:fs'
import path from 'node:path'

const distDir = path.resolve('dist')
const indexPath = path.join(distDir, 'index.html')
const baseUrl = 'https://methodlending.com'

// Shared with the app's client-side title hook
const routes = JSON.parse(fs.readFileSync(path.resolve('src/routeMeta.json'), 'utf8'))

const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const replaceMeta = (html, attr, key, content) => {
  const safeContent = escapeHtml(content)
  const regex = new RegExp(
    `<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*/?>`,
    'i'
  )

  return regex.test(html)
    ? html.replace(regex, `<meta ${attr}="${key}" content="${safeContent}" />`)
    : html
}

const replaceTitle = (html, title) => {
  const safeTitle = escapeHtml(title)
  return html.replace(/<title>[^<]*<\/title>/i, `<title>${safeTitle}</title>`)
}

const normalizeUrl = (routePath) =>
  routePath === '/' ? baseUrl : `${baseUrl}${routePath}`

const normalizeImage = (imagePath) => {
  if (/^https?:\/\//i.test(imagePath)) {
    return imagePath
  }

  return `${baseUrl}${encodeURI(imagePath)}`
}

const applyMeta = (html, meta) => {
  let output = replaceTitle(html, meta.title)
  output = replaceMeta(output, 'name', 'description', meta.description)
  output = replaceMeta(output, 'property', 'og:title', meta.title)
  output = replaceMeta(output, 'property', 'og:description', meta.description)
  output = replaceMeta(output, 'property', 'og:url', meta.url)
  output = replaceMeta(output, 'property', 'og:image', meta.image)
  output = replaceMeta(output, 'name', 'twitter:title', meta.title)
  output = replaceMeta(output, 'name', 'twitter:description', meta.description)
  output = replaceMeta(output, 'name', 'twitter:image', meta.image)
  return output
}

if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html not found. Run the build first.')
  process.exit(1)
}

const baseHtml = fs.readFileSync(indexPath, 'utf8')

routes.forEach((route) => {
  const meta = {
    title: route.title,
    description: route.description,
    url: normalizeUrl(route.path),
    image: normalizeImage(route.image),
  }

  const html = applyMeta(baseHtml, meta)
  const outputDir =
    route.path === '/' ? distDir : path.join(distDir, route.path.slice(1))

  fs.mkdirSync(outputDir, { recursive: true })
  fs.writeFileSync(path.join(outputDir, 'index.html'), html)
})

console.log('OG pages generated successfully.')
