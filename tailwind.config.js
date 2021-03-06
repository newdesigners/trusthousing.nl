module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        'container': "theme(container.padding.DEFAULT)",
        '31%': '31%',
        '32%': '32%',
        '48%': '48%',
        '49%': '49%',
        'initial' : 'innital',
        '108': '27rem',
      },
      colors: {
        //Base
        transparent: 'transparent',
        white: '#FFFFFF',
        current: 'currentColor',
        blue: '#446085',
        primary: {
          DEFAULT: '#404468',
          light: '#E0E2EE',
        },
        yellow: '#FFC640',
        green: '#BFE0CC',
        gray: {
          DEFAULT: '#B8B8B8',
          dark: '#727A87',
          light: '#F6F6F8',
          text: '#6F6F6F',
        },
      },
      fontFamily: {
        roboto: [
          'Roboto',
          'sans-serif',
          'Arial',
        ],
        suez: [
          'Suez One',
          'serif',
          'Arial',
        ],
      },
      fontSize: {
        '11': ['11px', { lineHeight: '15px' }],
        '12': ['12px', { lineHeight: '14px' }],
        '16': ['16px', { lineHeight: '24px' }],
        '18': ['18px', { lineHeight: '27px'}],
        '20': ['20px', { lineHeight: '30px'}],
        '22': ['22px', { lineHeight: '33px'}],
        '24': ['24px', { lineHeight: '36px' }],
        '28': ['28px', { lineHeight: '42px' }],
        '32': ['32px', { lineHeight: '42px' }],
        '36': ['36px', { lineHeight: '48px' }],
        '144': ['144px', { lineHeight: '169px' }],
      },
      width: {
        'initial': 'initial',
      },
      zIndex: {
        '-10': '-10',
       }
    },
    container: {
      padding: {
        DEFAULT: '20px'
      },
      center: true,
    },
    fill: theme => ({
      'white': theme('colors.white'),
      'primary': theme('colors.primary'),
    }),
  },
  variants: {
    extend: {
      container: [],
    },
  },
}