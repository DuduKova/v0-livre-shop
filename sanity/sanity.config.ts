import { defineConfig } from 'sanity'
import { schemaTypes } from './schemas'
import { esESLocale } from '@sanity/locale-es-es'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder-project-id"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    esESLocale(),
  ],
})