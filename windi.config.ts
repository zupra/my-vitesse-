
const rirColors = {
  titanic: '#04153E',
  gladiator: '#091F52',
  interstellar: '#113079',
  godfather: '#214EB0',
  rocky: '#3D75E4',
  alien: '#81ABEE',
  memento: '#C0D6F6',
  arrival: '#E4EDFB',
  rush: '#F6F9FE',
  bladerunner: '#111827',
  harakiri: '#1C2331',
  vertigo: '#2E3648',
  troy: '#495469',
  metropolis: '#6F7A90',
  pianist: '#A2ABBE',
  inception: '#CDD3DF',
  apocalypse: '#E6EBF5',
  trainspotting: '#F5F8FC',
  extraction: '#21043E',
  room: '#300F52',
  heat: '#4A197B',
  casino: '#6D3AA6',
  gentlemen: '#9954F2',
  seven: '#BB9AF4',
  unforgiven: '#DBCCFA',
  departed: '#EFE8FC',
  intouchables: '#F9F6FE',
  prestige: '#34040F',
  exorcist: '#480A17',
  predator: '#711426',
  stalker: '#AB213A',
  fargo: '#E14761',
  indiana: '#F196A5',
  bandit: '#F7CFD5',
  romance: '#FBE9EC',
  joker: '#FEF8F9',
  oldBoy: '#142202',
  forest: '#1F3404',
  whiplash: '#304D0A',
  shining: '#467510',
  matrix: '#57A003',
  drive: '#8DC95E',
  psycho: '#C7E6A8',
  amadeus: '#E3F3D8',
  shawshank: '#F6FCF3',
  schindler: '#2A1704',
  capernaum: '#3A1F03',
  platoon: '#643302',
  mulHolland: '#9E4F00',
  lebowski: '#D06E0B',
  snatch: '#E9A35D',
  chinatown: '#F8D6B5',
  jaws: '#FBECDD',
  warrior: '#FEFAF6',
}

/*
const colors = {
  blue: {
    "titanic": "#04153E",
    "gladiator": "#091F52",
    "interstellar": "#113079",
    "godfather": "#214EB0",
    "rocky": "#3D75E4",
    "alien": "#81ABEE",
    "memento": "#C0D6F6",
    "arrival": "#E4EDFB",
    "rush": "#F6F9FE"
  },
  gray: {
    "bladerunner": "#111827",
    "harakiri": "#1C2331",
    "vertigo": "#2E3648",
    "troy": "#495469",
    "metropolis": "#6F7A90",
    "pianist": "#A2ABBE",
    "inception": "#CDD3DF",
    "apocalypse": "#E6EBF5",
    "trainspotting": "#F5F8FC"
  },
  indigo: {
    "extraction": "#21043E",
    "room": "#300F52",
    "heat": "#4A197B",
    "casino": "#6D3AA6",
    "gentlemen": "#9954F2",
    "seven": "#BB9AF4",
    "unforgiven": "#DBCCFA",
    "departed": "#EFE8FC",
    "intouchables": "#F9F6FE"
  },
  pink: {
    "prestige": "#34040F",
    "exorcist": "#480A17",
    "predator": "#711426",
    "stalker": "#AB213A",
    "fargo": "#E14761",
    "indiana": "#F196A5",
    "bandit": "#F7CFD5",
    "romance": "#FBE9EC",
    "joker": "#FEF8F9"
  },
  green: {
    "oldBoy": "#142202",
    "forest": "#1F3404",
    "whiplash": "#304D0A",
    "shining": "#467510",
    "matrix": "#57A003",
    "drive": "#8DC95E",
    "psycho": "#C7E6A8",
    "amadeus": "#E3F3D8",
    "shawshank": "#F6FCF3"
  },
  оrange: {
    "schindler": "#2A1704",
    "capernaum": "#3A1F03",
    "platoon": "#643302",
    "mulHolland": "#9E4F00",
    "lebowski": "#D06E0B",
    "snatch": "#E9A35D",
    "chinatown": "#F8D6B5",
    "jaws": "#FBECDD",
    "warrior": "#FEFAF6"
  }
}
*/

const rirColors_toTW = {
  blue:{
    100: "#F6F9FE",
    200: "#E4EDFB",
    300: "#C0D6F6",
    400: "#81ABEE",
    500: "#3D75E4",
    600: "#214EB0",
    700: "#113079",
    800: "#091F52",
    900: "#04153E"
  },
  gray:{
    100: "#F5F8FC",
    200: "#E6EBF5",
    300: "#CDD3DF",
    400: "#A2ABBE",
    500: "#6F7A90",
    600: "#495469",
    700: "#2E3648",
    800: "#1C2331",
    900: "#111827"
  },
  indigo:{
    100: "#F9F6FE",
    200: "#EFE8FC",
    300: "#DBCCFA",
    400: "#BB9AF4",
    500: "#9954F2",
    600: "#6D3AA6",
    700: "#4A197B",
    800: "#300F52",
    900: "#21043E"
  },
  pink:{
    100: "#FEF8F9",
    200: "#FBE9EC",
    300: "#F7CFD5",
    400: "#F196A5",
    500: "#E14761",
    600: "#AB213A",
    700: "#711426",
    800: "#480A17",
    900: "#34040F"
  },
  green:{
    100: "#F6FCF3",
    200: "#E3F3D8",
    300: "#C7E6A8",
    400: "#8DC95E",
    500: "#57A003",
    600: "#467510",
    700: "#304D0A",
    800: "#1F3404",
    900: "#142202"
  },
  оrange:{
    100: "#FEFAF6",
    200: "#FBECDD",
    300: "#F8D6B5",
    400: "#E9A35D",
    500: "#D06E0B",
    600: "#9E4F00",
    700: "#643302",
    800: "#3A1F03",
    900: "#2A1704"
  }
}




const headerFonts = {
  '.primo': {
    'fontSize': '72px',
    'lineHeight': '72px',
    'fontWeight': '700',
  },
  '.gouda': {
    'fontSize': '56px',
    'lineHeight': '56px',
    'fontWeight': '700',
  },
  '.cheddar': {
    'fontSize': '40px',
    'lineHeight': '44px',
    'fontWeight': '700',
  },
  '.camembert': {
    'fontSize': '32px',
    'lineHeight': '36px',
    'fontWeight': '700',
  },
  '.ricotta': {
    'fontSize': '28px',
    'lineHeight': '32px',
    'fontWeight': '700',
  },
  '.burrata': {
    'fontSize': '24px',
    'lineHeight': '28px',
    'fontWeight': '700',
  },
  '.taleggio': {
    'fontSize': '20px',
    'lineHeight': '24px',
    'fontWeight': '700',
  },
  '.comte': {
    'fontSize': '20px',
    'lineHeight': '28px',
    'fontWeight': '700',
  },
  '.bryndza': {
    'fontSize': '16px',
    'lineHeight': '20px',
    'fontWeight': '700',
  },
  '.tulum': {
    'fontSize': '16px',
    'lineHeight': '24px',
    'fontWeight': '700',
  }
};

const basicFonts = {
  '.mascarpone': {
    'fontSize': '20px',
    'lineHeight': '28px',
    'fontWeight': '400',
  },
  '.brie': {
    'fontSize': '20px',
    'lineHeight': '24px',
    'fontWeight': '400',
  },
  '.parmigiano': {
    'fontSize': '16px',
    'lineHeight': '24px',
    'fontWeight': '400',
  },
  '.feta': {
    'fontSize': '16px',
    'lineHeight': '20px',
    'fontWeight': '400',
  }
}; 


const additionalFonts = {  
  '.mozzarella': {
    'fontSize': '13px',
    'lineHeight': '16px',
    'fontWeight': '400',
  },
  '.roquefort': {
    'fontSize': '13px',
    'lineHeight': '16px',
    'fontWeight': '700',
  },
  '.сaprino': {
    'fontSize': '10px',
    'lineHeight': '12px',
    'fontWeight': '400',
  }
};

const controlsFonts = { 
  '.maasdam': {
    'fontSize': '20px',
    'lineHeight': '24px',
    'fontWeight': '500',
  },
  '.sulguni': {
    'fontSize': '16px',
    'lineHeight': '20px',
    'fontWeight': '500',
  },
  '.briscola': {
    'fontSize': '13px',
    'lineHeight': '16px',
    'fontWeight': '500',
  },
  '.edam': {
    'fontSize': '10px',
    'lineHeight': '12px',
    'fontWeight': '500',
  }
};


const RIR_fonts = {
  ...headerFonts,
  ...basicFonts,
  ...additionalFonts,
  ...controlsFonts
}


const screens = {
  sm: '480px',
  md: '768px',
  lg: '976px',
  // xl: '1440px',
  xl: '1280px',
}


const RIR_borderRadius = {
  4:'4px',
  // 6:'6px',
  8:'8px',
  16:'16px',
  24:'24px',
}


import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'
import colors from 'windicss/colors'


function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt)
}

export default defineConfig({
  safelist: [
    // range(10).map(i => `mt-${i}`), // mt-1 to mt-10
    range(9).map(i => `bg-blue-${i}00`),
    range(9).map(i => `bg-gray-${i}00`),
    range(9).map(i => `bg-indigo-${i}00`),
    range(9).map(i => `bg-pink-${i}00`),
    range(9).map(i => `bg-green-${i}00`),
    range(9).map(i => `bg-оrange-${i}00`),
    Object.keys(rirColors).map(i => `bg-${i}`),
    [
      "primo",
      "gouda",
      "cheddar",
      "camembert",
      "ricotta",
      "burrata",
      "taleggio",
      "comte",
      "bryndza",
      "tulum",
      //
      "mascarpone",
      "brie",
      "parmigiano",
      "feta",
      //
      "mozzarella",
      "roquefort",
      "сaprino",
      //
      "maasdam",
      "sulguni",
      "briscola",
      "edam"
    ]
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      // sans: ['Golos', ...defaultTheme.fontFamily.sans],
      sans: ['Golos'],
      serif: ['Golos'],
      mono: ['Golos'],
      display: ['Golos'],
      body: ['Golos']
    },
    screens,
    colors: {
      ...colors,
      ...rirColors_toTW, // reset colors
      ...rirColors,
    },
    extend: {
      borderRadius: {
        ...RIR_borderRadius
      },
      lineClamp: {
        2: '2',
        3: '3',
        // 4: '4',
      },
    },
  },
  // variants: {},
  extract: {

    exclude: [
      '*.{vue}',
      // '**/*.{vue,html,jsx,tsx}',
      'node_modules/**/*',
      '.git/**/*',
    ],

    // include: ['src/**/*.{vue,html,jsx,tsx}'],
    // exclude: ['node_modules', '.git'],
  },
  plugins: [

    plugin(({ addUtilities }) => {
      addUtilities({
        ...RIR_fonts
      })
    }),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/typography'),
    require('windicss/plugin/aspect-ratio'),
    require('@windicss/plugin-scrollbar'),
  ]

})

