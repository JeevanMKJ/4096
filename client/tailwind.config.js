/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      colors: {
        'mauve': '#D3C4BE',
        'tan': '#EBCFC4'

      },
    },
  },
  plugins: [],
  variants: {
    extend: {},
  },
};
