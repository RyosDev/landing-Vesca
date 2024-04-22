/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        lightBlue: "#595B93",
        strongBlue: "#1B1D6A",
        titleColor: "#292B79",
        textColor: "#9EA0D6",
        strongText: "#696CC9",
      },
    },
  },
  plugins: [],
};
