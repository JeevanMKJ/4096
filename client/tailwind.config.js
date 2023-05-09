/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      colors: {
        'mauve': "#D3C4BE",
        'tan': "#EBCFC4",
        'steel-blue': '#90AEB2',
        'sweater': '#EEE6DE',
        'emerald': '#37514D',
        'clay': '#DD8E75',
        'cran': '#B6594C',
        'sage': '#82713D',
        'cream': '#EAC8AB',
        'burnt-orange': '#CD7D44',
        'garden': '#C2C3A8',
        'mustard': '#D3AD6B'
      },
      aspectRatio: {
        '1/1': '1 / 1',
      },
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/aspect-ratio"),
    ],
    variants: {
      extend: {},
    },
  }
};
