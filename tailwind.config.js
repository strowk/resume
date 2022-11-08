// import screens as "./tailwind"

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.4s ease-in-out",
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
    // screens: require("./tailwind.screens")
  },
  plugins: [],
};
