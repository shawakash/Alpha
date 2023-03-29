/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        popins: ['Poppins', 'sans-serif'],
        mon: ['Montserrat', 'sans-serif'],
        rob: ['Roboto', 'sans-serif'],
        cab: ['Roboto', 'sans-serif']
      },
     
    },
  },
  plugins: [],
}