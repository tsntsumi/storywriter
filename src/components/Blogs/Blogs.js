import BlogData from "@/component/Blog/Data"

export default async function Blogs({ view }) {
  const blogs = await BlogData()

  return (
    <ul className="list-none">
      {blogs.map((blog, i) => (
        <li key={`${i}`}>{view(blog)}</li>
      ))}
    </ul>
  )
}
