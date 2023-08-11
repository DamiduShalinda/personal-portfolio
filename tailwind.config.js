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
        'light1' : '#f8fafc', //lightest color
        'light2' : '#f1f5f9',
        'light3' : '#e2e8f0',
        'dark1' : '#1e293b',
        'dark2' : '#0f172a',
        'dark3' : '#020617', //darkers color
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}
}
