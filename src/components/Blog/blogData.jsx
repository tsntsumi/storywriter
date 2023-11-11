import fs from 'fs'
import path from 'path'

const BlogData = (slug) => {
  const toppath = path.join(process.cwd(), top)
  const pattern = path.join(toppath, '**/*.{mdx,md}')
  const paths = glob.sync(pattern)

  const blogs = paths.map((p) => {
    const pathname = p.substring(process.cwd().length)
    const basename = p.substring(toppath.length)
    const s = basename
      .replace(/ /g, '-')
      .replace(/\.mdx?$/, '')
      .trim()
    return { pathname: pathname, fullpath: p, basename: basename, slug: s }
  })

  if (!slug) {
    return blogs
  }
  const found = blogs.find((b) => b.slug === slug)
  return [found]
}

export default BlogData
