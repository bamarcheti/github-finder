/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        azul: {
          50: '#9da5d1',
          200: '#2b3566',
          300: '#0e1129'
        },
        white: '#ffffff'
      },
      fontFamily: {
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
