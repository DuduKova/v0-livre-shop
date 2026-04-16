import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'
import { esESLocale } from '@sanity/locale-es-es'
import { sanityDataset, sanityProjectId } from './env'

export default defineConfig({
  name: 'default',
  title: 'Livre Studio',
  basePath: '/studio',
  projectId: sanityProjectId,
  dataset: sanityDataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool(),
    esESLocale(),
  ],
})
