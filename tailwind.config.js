module.exports = {
  purge:['.pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*/.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      projecty: {
        1:'#C592E8',
        2:'#B699F2',
        3:'#9995DB',
        4:'#99ACF2',
        5:'#92BBE8'
      },
      indigo: {
        light: '#ff0000',
        DEFAULT: '#C592E8',
        dark: '#0000ff',
        600: '#ff00ff'
      },
      white: {
        DEFAULT:'#ffffff'
      },
      dark:{
        5:'#111111'
      },
      green: {
        DEFAULT:'#00ff00'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ],
}
