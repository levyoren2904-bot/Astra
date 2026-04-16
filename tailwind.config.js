/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#F6F6FE',
          100: '#E5E6FC',
          200: '#CCCCFA',
          300: '#B2B3F7',
          400: '#9899F5',
          500: '#7E80F2',
          600: '#5C5DEF',
          700: '#4546ED',
        },
        secondary: {
          100: '#AFE7D0',
          200: '#75D6B2',
          300: '#03C794',
          400: '#00BB7D',
          500: '#00AD68',
          600: '#009E5D',
          700: '#008C4F',
        },
        fg: {
          100: '#FFFFFF',
          200: '#D9D9D9',
          300: '#B3B3B3',
          400: '#8C8C8C',
          500: '#666666',
          600: '#242424',
          700: '#111122',
        },
        bg: {
          100: '#F5F5F6',
          200: '#D7D7DA',
          300: '#BDBDC2',
          400: '#A2A2AA',
          500: '#878792',
          600: '#6E6E78',
          700: '#56565D',
        },
        success: {
          100: '#CCEBC7',
          600: '#70C969',
          700: '#60C257',
        },
        warning: {
          100: '#FDE2CE',
          600: '#F79954',
          700: '#F68A3C',
        },
        error: {
          100: '#FDE4E2',
          600: '#F65E53',
          700: '#F44336',
        },
        nav: '#494154',
        'side-panel': '#393245',
        'nav-hover': '#756B85',
        darkblue: '#0086C0',
      },
      boxShadow: {
        'btn-primary': '0 2px 4px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}
