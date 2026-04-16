import { CollectionConfig } from 'payload/types'

const LANES = ['top', 'jungle', 'mid', 'adc', 'support']
const ARCHETYPES = ['fighter', 'mage', 'marksman', 'support', 'assassin', 'tank']
const STYLES = ['aggressive', 'defensive', 'carry', 'utility', 'mobile', 'poke', 'cc', 'scaling']
const FACTIONS = ['demacia', 'noxus', 'freljord', 'ionia', 'piltover', 'zaun', 'shurima', 'targon', 'shadow_isles', 'bilgewater', 'bandle', 'darkin', 'void', 'runeterra']
const UNIVERSES = ['medieval', 'dark_fantasy', 'steampunk', 'futuristic', 'celestial', 'ancient', 'pirate', 'yordle', 'ruined', 'cosmic']
const TYPES = ['human', 'mage_creature', 'demon', 'undead', 'robot', 'animal', 'void_creature', 'yordle', 'celestial', 'entity']

const Champions: CollectionConfig = {
  slug: 'champions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'faction', 'difficulty', 'lanes'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'apiId',
      label: 'API ID (Data Dragon)',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Used for champion images: https://ddragon.leagueoflegends.com/cdn/img/champion/loading/{apiId}_0.jpg',
      },
    },
    {
      name: 'lanes',
      type: 'select',
      hasMany: true,
      required: true,
      options: LANES.map(l => ({ label: l, value: l })),
    },
    {
      name: 'archetypes',
      type: 'select',
      hasMany: true,
      required: true,
      options: ARCHETYPES.map(a => ({ label: a, value: a })),
    },
    {
      name: 'styles',
      type: 'select',
      hasMany: true,
      required: true,
      options: STYLES.map(s => ({ label: s, value: s })),
    },
    {
      name: 'faction',
      type: 'select',
      required: true,
      options: FACTIONS.map(f => ({ label: f, value: f })),
    },
    {
      name: 'difficulty',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
      admin: {
        description: '1 = très facile, 5 = très difficile',
      },
    },
    {
      name: 'universes',
      type: 'select',
      hasMany: true,
      options: UNIVERSES.map(u => ({ label: u, value: u })),
    },
    {
      name: 'types',
      type: 'select',
      hasMany: true,
      options: TYPES.map(t => ({ label: t, value: t })),
    },
    {
      name: 'bios',
      label: 'Biographies',
      type: 'group',
      fields: [
        {
          name: 'fr',
          label: 'Bio FR',
          type: 'textarea',
        },
        {
          name: 'en',
          label: 'Bio EN',
          type: 'textarea',
        },
        {
          name: 'es',
          label: 'Bio ES',
          type: 'textarea',
        },
      ],
    },
  ],
}

export default Champions
