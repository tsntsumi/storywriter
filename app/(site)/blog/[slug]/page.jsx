import Image from 'next/image'
import Head from 'next/head'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import SingleBlogPage from '@/components/Blog/SingleBlogPage'

const Page = async (props) => {
  const {
    params: { slug },
    searchParams,
  } = props
  const mdx = await import(`@/content/posts/${slug}.mdx`)
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
