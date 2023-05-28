
import type { Config } from 'tailwindcss'
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {

    fontFamily: {
      Lexend: ["Lexend", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#1e293b",
        secondary: "#334155",
        tertiary: "#8EB5FF",
        quaternary: "#8598B2",
        accent: "#d97706",
        success: "#20FF00",
        warning: "#FF8900",
        danger: "#FF6D5F",
        text: "#D9E8FE", 
      },
    },
  },
  plugins: [

    require('tailwind-scrollbar')

]
}) satisfies Config
