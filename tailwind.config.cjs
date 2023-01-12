/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'moon-raker': {
          50: '#f7f4fe',
          100: '#f1ecfb',
          200: '#d9cdf7',
          300: '#cfbef4',
          400: '#b798ed',
          500: '#9f6ee4',
          600: '#914fd8',
          700: '#813dc4',
          800: '#6c33a4',
          900: '#592b87',
        },
        'port-gore': {
          50: '#efeeff',
          100: '#e3e1fe',
          200: '#cbc8fd',
          300: '#afa7fa',
          400: '#9884f5',
          500: '#8766ee',
          600: '#7a4ae1',
          700: '#6b3bc7',
          800: '#5633a0',
          900: '#271a45',
        },
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
        11: 'repeat(11, minmax(0, 1fr))',
        12: 'repeat(12, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}
