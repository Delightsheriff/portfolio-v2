import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/schemaTypes'

const id = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;


export default defineConfig({
  name: 'default',
  title: 'delightsheriff',

  projectId: id!,
  basePath: '/studio',
  dataset: dataset!,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
