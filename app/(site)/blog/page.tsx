import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import BlogItem from '@/components/Blog/BlogItem'
import { Metadata } from 'next'
import BlogFetch from '@/components/Blog/BlogFetch'

export const metadata: Metadata = {
  title: 'Blog -- Story Marketing',
  description: 'Marketing Information using Story',
  // other metadata
}

const BlogPage = async () => {
  const blogData = await BlogFetch()
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {blogData?.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  )
}

export default BlogPage
