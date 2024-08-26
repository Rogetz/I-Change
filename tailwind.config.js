/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  // tells tailwind that we don't want to use the systems darkmode.
  // enables use of the next-themes package.
  darkMode: "class",
  theme: {
    extend: {},
  },
  // for the great typography
  plugins: [
    require("@tailwindcss/typography")

  ],
}

