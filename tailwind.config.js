/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      justifyContent: ['last'],

      colors: {
        brand: {
          50: '#EAF8FF', // Lightest
          100: '#C6E8FF',
          200: '#A2D4FF',
          300: '#7EC0FF',
          400: '#5AACFF',
          500: '#1DA1F2', // Base
          600: '#1C8CE6',
          700: '#1B77DA',
          800: '#1962CE',
          900: '#174DC2', // Darkest
        },
        text: {
          primary: '#343838',
        },
      },
    },
  },
  plugins: [],
};
