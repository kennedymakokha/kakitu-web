module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fill: theme => ({
      'red': theme('colors.red.500'),
      'green': theme('colors.green.500'),
      'blue': theme('colors.blue.500'),
    }),
    // Some useful comment
    fontFamily: {
      'Open': ["Open Sans", 'sans-serif'],
      'Montserrat': ['Montserrat', 'sans-serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    height: {
      'three-quarter-screen': '75vh',
      'half-screen': '50vh',
    },

    extend: {
      backgroundImage: {
        'hero-pattern': "url('assets/bgshape.png')",
        'bg': "url('assets/bg.jpg')",
      },
      colors: {
        'base': {
          '600': '#4cbf4a',
          '500': '#4cbf4aed',
          '400': '#4cbf4ae3',
          '300': '#4cbf4ad1',
          '200': '#4cbf4aa8',
          '100': '#4cbf4aa8',
          '50': '#4cbf4a63',

        },
        "appStore": { '600': "#1aaaf3" },
        "android": "#91b939"
      }
    },
  },
  plugins: [],
}
