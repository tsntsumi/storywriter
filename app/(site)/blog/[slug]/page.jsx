import Image from 'next/image'
import Head from 'next/head'
import { redirect } from 'next/navigation'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import SingleBlogPage from '@/components/Blog/SingleBlogPage'
import BlogFetch from '@/components/Blog/BlogFetch'

const Page = async (props) => {
  const {
    params: { slug },
    searchParams,
  } = props

  const blogs = await BlogFetch(slug)

  if (!blogs) {
    redirect('/404')
    return
  }

  const blogData = blogs.pop()

  return (
    <article className="blog">
      <Head>
        <title>a post</title>
        <meta name="description" content="this is a post" />
      </Head>
      <SingleBlogPage data={blogData}>
        <ReactMarkdown>{blogData.body}</ReactMarkdown>
      </SingleBlogPage>
    </article>
  )
}

export default Page
