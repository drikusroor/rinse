/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        grainy: "url('/images/grainy.svg')",
      },
      backgroundSize: {
        '100%': '100%',
        '10%': '10%',
      },
      colors: {
        aqua: '#5D848C',
        forest: '#14261C',
        sand: '#F0F2EB',
        salmon: '#D9756C',
        'salmon-light': '#F2B2AC',
      },
      fontFamily: {
        display: ['"Rammetto One"'],
      },
    },
  },
  plugins: [],
}
