import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "hsl(0, 0 %, 100 %)",
      blue: {
        marine: "hsl(213, 96%, 18%)",
        purplish: "hsl(243, 100%, 62%)",
        pastel: "hsl(228, 100%, 84%)",
        light: "hsl(206, 94%, 87%)",
      },
      red: {
        strawberry: "hsl(354, 84%, 57%)",
      },
      gray: {
        cool: "hsl(231, 11%, 63%)",
        light: "hsl(229, 24%, 87%)",
      },
      magnolia: "hsl(217, 100%, 97%)",
      alabaster: "hsl(231, 100%, 99%)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
