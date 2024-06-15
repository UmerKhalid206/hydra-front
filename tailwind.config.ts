import type { Config } from "tailwindcss";
import { Montserrat } from "next/font/google";
import dynamic from "next/dynamic";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center:true,
      padding:"0.1rem"
    },
    extend: {
      screens:{
        'MB': '390px',      //hydras own design mobile
        'MDB': '785px',
        'LT':'870px',       //large tab
        'LS':'1150px',      //large screen
        'FF': '1440px',      //fourteen fourty
      },
      fontFamily :{
        Montserrat: '"Montserrat", sans-serif',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'custom-radial': 'radial-gradient(circle, #3A3456 0%, #3A3456 95%, #211E2E 100%)',
      },
    },
  },
  plugins: [
    function ({addUtilities}){
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar":{
          display: "none",
        },
        ".no-scrollbar":{
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities)

    },
  ],
};
export default config;
