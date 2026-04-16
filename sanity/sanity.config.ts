import { defineConfig } from 'sanity'
import { schemaTypes } from './schemas'
import { esESLocale } from '@sanity/locale-es-es'
import { projectId, dataset } from './env'

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