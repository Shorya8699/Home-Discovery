/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f7f5',
          100: '#e2e5df',
          200: '#c5cdbf',
          300: '#a6b39b',
          400: '#87987a',
          500: '#697e5e', // olive green
          600: '#56664c',
          700: '#44503c',
          800: '#333c2d',
          900: '#21271e',
        },
        secondary: {
          50: '#f8f8f6',
          100: '#f1f0eb', // ivory
          200: '#e3e1d6',
          300: '#d4d0c0',
          400: '#c5c0aa',
          500: '#b7b194',
          600: '#a9a17f',
          700: '#8e876a',
          800: '#706a53',
          900: '#524e3d',
        },
        neutral: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#808080', // grey
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#252525',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}