/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black" : "#23212C",
        "orange1" : "#F8693F",
        "orange2" : "#DE5F2A",
        "green1" : "#51946D",
        "green2" : "#2ADB74"
      },
      fontFamily: {
        myCustomFont : ['Roboto Slab', 'serif']
      }
    },
  },
  plugins: [],
}
