/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary-color)',
        'secondary': 'var(--secondary-color)',
        'tertiary': '#3F3F3F',
        'quaternary': '#4F4F4F',
        'quinary': '#5F5F5F',
        'senary': '#6F6F6F',
        'septenary': '#7F7F7F',
        'octonary': '#8F8F8F',
        'nonary': '#9F9F9F',
        'denary': '#AFAFAF',
    },
  },
  plugins: [],
}

