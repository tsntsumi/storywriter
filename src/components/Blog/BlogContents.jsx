import fs from 'fs'
import matter from 'gray-matter'

const BlogContents = (slug) => {
  const files = fs.readdirSync('content/posts')
  const blogs = files.map((n, i) => {
    const slug = n.replace(/\.mdx?$/, '').replace(/ /g, '-')
    const fileContent = fs.readFileSync(`content/posts/${n}`, 'utf-8')
    const { data, content } = matter(fileContent)
    return {
      _id: i,
      slug: slug,
      title: data.title,
      body: content,
      metadata: '',
      mainImage: data.image,
      author: data.author,
      tags: data.tags,
      publishedAt: data.date,
    }
  })

  return blogs
}

export default BlogContents
