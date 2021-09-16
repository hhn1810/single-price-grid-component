const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   cyanColor: "hsl(179, 62%, 43%)",
    //   brighYellow: "hsl(71, 73%, 54%)",
    //   lightGray: "hsl(204, 43%, 93%)",
    //   grayishBlue: "hsl(218, 22%, 67%)",
    // },
    fontFamily: {
      karla: ["Graphik", "sans-serif"],
    },
    screen: {
      mobile: "375px",
      desktop: "1440px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
