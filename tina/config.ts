import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
  branch,
  clientId: 'ae869f0a-53b7-4cbd-8cdb-767e79d7d2ca', // Get this from tina.io
  token: '017dba4398e716e84cf8e484d2dc0d424e44f8ee', // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Blog Posts',
        path: 'content/posts',
        format: 'mdx',
        defaultItem: () => {
          return {
            title: 'New Post',
            author: 'TSUTSUMI Kikuo <kikuo@alizza-ideal.com>',
            date: new Date().toLocaleString('ja-jp'),
            tags: ['story'],
          }
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            label: 'Hero',
            name: 'hero',
            type: 'image',
          },
          {
            type: 'reference',
            name: 'auhor',
            label: 'Author',
            collections: ['author'],
            required: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            required: true,
          },
          {
            name: 'tags',
            label: 'Tags',
            type: 'reference',
            collections: ['tag'],
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
      },
      {
        name: 'tag',
        label: 'Tags',
        path: 'content/tags',
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Tag Name',
            required: true,
          },
        ],
      },
      {
        name: 'author',
        label: 'Authors',
        path: 'content/authors',
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Name',
            required: true,
          },
        ],
      },
    ],
  },
})
