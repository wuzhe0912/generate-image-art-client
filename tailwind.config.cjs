/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8C3ADD',
        'gray-500': '#1A1A1A',
      },
    },
  },
  plugins: [],
};
