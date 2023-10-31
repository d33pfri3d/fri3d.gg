/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
      },
      fontFamily: {
        virgil: ["Virgil", ...defaultTheme.fontFamily.sans],
        ibm: ["IBM", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
