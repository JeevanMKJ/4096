/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  variants: {
    extend: {},
  },
};
