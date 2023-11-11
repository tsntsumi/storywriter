import { headers } from 'next/headers'

const BlogFetch = async (slug) => {
  const headerData = headers()
  const host = headerData.get('host')
  const protocol =
    headerData.get('x-forwarded-proto') ?? host.startWith('localhost') ? 'http' : 'https'
  const apiBase = `${protocol}://${host}`
  const search = slug ? `?slug=${slug}` : ''
  const r = await fetch(`${apiBase}/blog/posts${search}`, { mothod: 'GET' })
  const blogData = await r.json()

  return blogData
}

export default BlogFetch
