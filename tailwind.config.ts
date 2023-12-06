import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/hero-image-wr.jpg')",
        done: "url('../public/done-round.svg')",
      },
      colors: {
        shark: "rgb(var(--c-shark) / <alpha-value>)",
        "shark-light": "rgb(var(--c-shark-light) / <alpha-value>)",
        "pale-sky": "rgb(var(--c-pale-sky) / <alpha-value>)",
        iron: "rgb(var(--c-iron) / <alpha-value>)",
        "cornflower-blue": "rgb(var(--c-cornflower-blue) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
