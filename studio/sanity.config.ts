import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { simplerColorInput } from 'sanity-plugin-simpler-color-input'
import { iconPicker } from 'sanity-plugin-icon-picker'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'xmea2rf5',
  dataset: 'production',

  plugins: [deskTool(), visionTool(),simplerColorInput(),iconPicker()],

  schema: {
    types: schemaTypes,
  },
})
