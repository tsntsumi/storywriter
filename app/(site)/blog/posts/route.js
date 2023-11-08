import { NextRequest, NextResponse } from 'next/server'
import BlogContents from '@/components/Blog/BlogContents'

export async function GET(req) {
  const slug = req.nextUrl.searchParams.get('slug')

  const blogs = BlogContents(slug)

  return NextResponse.json(blogs || [])
}
