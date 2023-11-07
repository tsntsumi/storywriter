import Image from 'next/image'
import Head from 'next/head'
import { redirect } from 'next/navigation'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import SingleBlogPage from '@/components/Blog/SingleBlogPage'
import BlogData from '@/components/Blog/BlogData'

const Page = async (props) => {
  const {
    params: { slug },
    searchParams,
  } = props

  const blogData = BlogData(slug)

  if (!blogData) {
    redirect('/404')
    return
  }

  const mdx = await import(`/content/posts/${blogData.basename}`)
  const { data, content } = matter(mdx.default)

  return (
    <article className="blog">
      <Head>
        <title>a post</title>
        <meta name="description" content="this is a post" />
      </Head>
      <SingleBlogPage data={data}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </SingleBlogPage>
    </article>
  )
}

export default Page
