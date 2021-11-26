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
        'container-lg': "theme(container.padding.lg)",
        'container-xl': "theme(container.padding.xl)",
        '31%': '31%',
        '32%': '32%',
        '48%': '48%',
        '49%': '49%',
        'initial' : 'innital',
      },
      colors: {
        //Base
        transparent: 'transparent',
        white: '#FFFFFF',
        current: 'currentColor',
        primary: '#223343',
        green: '#9FA400',
        yellow: '#FCBC00',
        gray: {
          DEFAULT: '#E5E5E5',
          dark: '#727A87',
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
          'sans-serif',
          'Arial',
        ],
      },
      fontSize: {
        '16': ['16px', { lineHeight: '24px' }],
        '18': ['18px', { lineHeight: '27px'}],
        '20': ['20px', { lineHeight: '30px'}],
        '22': ['22px', { lineHeight: '33px'}],
        '24': ['24px', { lineHeight: '36px' }],
        '28': ['28px', { lineHeight: '42px' }],
        '36': ['36px', { lineHeight: '54px' }],
      },
      width: {
        'initial': 'initial',
      },
    },
    container: {
      padding: {
        DEFAULT: '20px',
        lg: '30px',
        xl: '40px',
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