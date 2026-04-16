import { buildConfig } from 'payload/config'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import Users from './collections/Users'
import Pages from './collections/Pages'
import AffiliateBlocks from './collections/AffiliateBlocks'
import ChampionContent from './collections/ChampionContent'
import Migrations from './collections/Migrations'

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '— RiftMatch CMS',
      favicon: '/favicon.ico',
    },
  },
  editor: slateEditor({}),
  collections: [Users, Pages, AffiliateBlocks, ChampionContent, Migrations],
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || 'mongodb://mongo:27017/lolpersonnality',
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  cors: [
    'http://localhost:4321',
    'http://localhost:80',
    'http://astro:4321',
    process.env.FRONTEND_URL || '',
  ].filter(Boolean),
  csrf: [
    'http://localhost:4321',
    'http://localhost:3010',
    'http://localhost:80',
    'http://localhost',
    process.env.FRONTEND_URL || '',
  ].filter(Boolean),
})
