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
        'MB': '390px',
        'LT':'850px',
        'FF': '1440px',
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
  plugins: [],
};
export default config;
