import glob from 'glob'

const BlogData = (slug) => {
  const articles = glob.sync(`../../content/posts/**/*.mdx`)

  const slugs = articles.map((a) => a.split('/')[1].replace(/ /g, '-').slice(0, -3).trim())

  if (!slug) {
    return slugs
  }
  return slugs.find((s) => s === slug)
}

export default BlogData
