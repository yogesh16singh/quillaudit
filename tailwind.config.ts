import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mains": "adial-gradient(circle, rgba(2, 0, 142, 1) 0%, rgba(0, 12, 138, 1) 53%, rgba(0, 40, 87, 1) 100%)"
      },
      backgroundColor: {
        "p": '#FFABC9',
      },
      colors: {
        "primary": "#0E3088",
        "muted": '#808080',
        "secondary": '#2D83EE',
        "b": '#ABCDFF',
        "b-2": "#EDF2FE"
      }
    },
    fontFamily: {
      jost: ['var(--font-jost)'],
      sans: ['var(--font-poppins)']
    }
  },
  plugins: [],
};
export default config;
