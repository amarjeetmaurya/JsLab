import { Config } from 'tailwindcss'

const config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#3AB0FF',
          DEFAULT: '#008CFF',
          dark: '#005BBB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
}

export default config
