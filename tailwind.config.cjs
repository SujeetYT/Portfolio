/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black" : "#23212C",
        "orange1" : "#F8693F",
        "orange2" : "#ed5a2f",
        "green1" : "#51946D",
        "green2" : "#2ADB74"
      },
      fontFamily: {
        myCustomFont : ['Roboto Slab', 'serif']
      },
      keyframes:{
        blob:{
          "0%":{
            transform: "scale(1)",
          },
          "33%":{
            transform: "scale(1.2)",
          },
          "66%":{
            transform: "scale(0.8)",
          },
          "100%":{
            transform: "scale(1)",
          },
        },

        float2:{
          "0%,100%": {
            top: "0px",
            left: "-50px"
          },
          "25%": {
            top: "50px;",
            left: "50px;"
          },
          "50%": {
            top: "0px;",
            left: "50px;"
          }
        },

        float3:{
          "0%,100%": {
            top: "0%",
            left: "0%"
          },
          "25%": {
            top: "35%;",
            left: "0%;"
          },
          "50%": {
            top: "30%",
            left: "80%"
          },
          "75%": {
            top: "0%",
            left: "80%;"
          }
        },

        floatLeftRight:{
          "0%,100%": {
            left: "35%"
          },
          "50%": {
            left: "65%;"
          }
        }
      },
      animation:{
        blob: "blob 4s infinite",
        float2: "float2 4s infinite",
        float3: "float3 9s infinite",
        floatLeftRight: "floatLeftRight 4s ease-in-out infinite",
      }
    },
  },
  plugins: [],
}
