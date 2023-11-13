import BlogData from "./Data"
import matter from "gray-matter"

const BlogContents = async (slug) => {
  return await BlogData(slug)
}

export default BlogContents
