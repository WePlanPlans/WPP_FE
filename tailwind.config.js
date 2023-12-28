/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#29DDF6',
        gray1: '#f8f8f8',
        gray2: '#ededed',
        gray3: '#d7d7d7',
        gray4: '#888',
        gray5: '#5e5e5e',
        gray6: '#38393C',
        gray7: '#1E1E1E',
      },
    },
  },
  plugins: [],
};
