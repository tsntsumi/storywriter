import glob from 'glob'
import path from 'path'

const BlogData = (slug) => {
  const contentDir = path.join(process.cwd(), '/content/posts/**/*.{mdx,md}')
  const paths = glob.sync(contentDir)

  const blogs = paths.map((p) => {
    const basename = p.split('/').pop()
    const s = basename
      .replace(/ /g, '-')
      .replace(/\.mdx?$/, '')
      .trim()
    return { basename: basename, slug: s }
  })

  if (!slug) {
    return blogs
  }
  const found = blogs.find((b) => b.slug === slug)
  return found
}

export default BlogData
