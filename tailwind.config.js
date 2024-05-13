/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainBlue:"hsl(216, 68%, 91%);",
        fontFamily: {
          custom: "'Outfit', sans-serif;",
      }
      
      }
    },
  },
  plugins: [],
}

