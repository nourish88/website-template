/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8b0000",
        secondary: "#333",
        accent: "#d4af37",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        roboto: ['"Roboto"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
