/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "pr-blue":"#003285",
        "sc-blue":"#2A629A",
        "pr-orange":"#FF7F3E",
        "sc-orange":"#FFDA78",
      }
    },
  },
  plugins: [],
}