/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    colors: {
      'primary' : 'rgb(var(--color-primary))',
      'secondary': 'rgb(var(--color-secondary))'
    },
    extend: {},
  },
  plugins: [],
}

