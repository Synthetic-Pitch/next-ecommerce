import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pandesal:['var(--pandesal)'],
        tinapa:['var(--tinapa)'],
        kape:['var(--kape)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        xs:'546px'
      }
    },
  },
  plugins: [],
} satisfies Config;
