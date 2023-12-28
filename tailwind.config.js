/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#29DDF6',
        lightgray: '#d7d7d7',
        darkgray: '#2f2f2f',
      },
    },
  },
  plugins: [],
};
