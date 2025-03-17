/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        BgColor:'var(--color-BgColor)',
        TextColor :'var(--color-TextColor)',
        Text1Color1:'var(--color-Text1Color1)',

      },
    },
  },
  plugins: [],
}

