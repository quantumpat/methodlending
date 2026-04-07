import fs from 'node:fs'
import path from 'node:path'

const distDir = path.resolve('dist')
const indexPath = path.join(distDir, 'index.html')
const baseUrl = 'https://methodlending.com'

const routes = [
  {
    path: '/',
    title: 'Method Lending',
    description:
      'Tailored mortgage solutions for real estate investors, purchases, refinances, and DSCR loans.',
    image: '/images/Method Banner.png',
  },
  {
    path: '/purchase',
    title: 'DSCR Purchase Loans | Method Lending',
    description:
      'DSCR purchase loans built for real estate investors with clear underwriting, flexible terms, and fast closings.',
    image: '/images/PurchaseBtn.png',
  },
  {
    path: '/refinance',
    title: 'DSCR Refinance | Method Lending',
    description:
      'Refinance to unlock equity and stabilize cash flow with DSCR-focused options and flexible structures.',
    image: '/images/RefinanceBtn.png',
  },
  {
    path: '/access-equity',
    title: 'Access Equity | Method Lending',
    description:
      'Turn built-up equity into capital for acquisitions, renovations, or portfolio growth.',
    image: '/images/AccessEquityBtn.png',
  },
  {
    path: '/loan-options',
    title: 'Loan Options | Method Lending',
    description:
      'Compare DSCR, asset utilization, and alternative documentation programs built for investors.',
    image: '/images/House 1.png',
  },
  {
    path: '/markets-served',
    title: 'Markets Served | Method Lending',
    description:
      'Investor-focused lending in markets nationwide with business-purpose DSCR programs.',
    image: '/images/House 2.jpg',
  },
  {
    path: '/team',
    title: 'Team | Method Lending',
    description: 'Meet the Method Lending team serving real estate investors.',
    image: '/images/Method Solo Logo.png',
  },
  {
    path: '/request-quote',
    title: 'Request a Quote | Method Lending',
    description:
      'Request a custom quote for your investment property purchase, refinance, or cash-out.',
    image: '/images/Method Banner.png',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Method Lending',
    description: 'Privacy Policy for Method Lending.',
    image: '/images/Method Banner.png',
  },
  {
    path: '/terms-of-use',
    title: 'Terms of Use | Method Lending',
    description: 'Terms of Use for Method Lending.',
    image: '/images/Method Banner.png',
  },
]

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
