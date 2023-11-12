export type Product = {
  name: string
  main_image: string
  available: boolean
  price: number
  public: boolean
  brand: string
  description: string
  amazon_link: string
  images: string[]
  publisher: {
    name: string
    external_id: string
  }
  uppercase_name: string
  added_on: Date
}

export type BlogEntry = {
  title: string
  hero_image: string
  summary: string
  slug: string
  author: string
  tags: string[]
  content: (BlogEntryImages | BlogEntryText)[]
  status: string
  created_on: Date
}

export type BlogEntryImages = {
  type: "images"
  value: string[]
}

export type BlogEntryText = {
  type: "text"
  value: string
}

export type BlogEntryProducts = {
  type: "products"
  value: Product[]
}
