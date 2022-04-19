module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: "#1fb6ff",

        gray: "#212428",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
