// import screens as "./tailwind"

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {}
    // screens: require("./tailwind.screens")
  },
  plugins: [],
};