const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
    },

    colors: {
      base: {
        primary: "#509EB7",
        accent: "#6D6C6F",
      },
      gray: {
        1: "#ACACAC",
        2: "#C0C0C0",
        3: "#D7D7D7",
        4: "#EBEBEB",
        5: "#FFFFFF",
        6: "#343434",
        7: "#252525",
        8: "#1D1D1D",
        9: "#151515",
        10: "#000000",
      },
      semantics: {
        1: "#0ECE15",
        2: "#CE0E0E",
        3: "#CEC60E",
      },
    },
    backgroundColor: {
      base: {
        primary: "rgba(3,28,48,1)",
        accent: "#6D6C6F",
      },
      blues: {
        1: "rgba(199,208,216,1)",
        2: "rgba(102,122,138,1)",
        3: "rgba(95,179,246,1)",
      },
      grey: {
        1: "rgba(51,63,73,1)",
        2: "rgba(43,64,82,1)",
      },
      gray: {
        1: "#ACACAC",
        2: "#C0C0C0",
        3: "#D7D7D7",
        4: "#EBEBEB",
        5: "#FFFFFF",
        6: "#343434",
        7: "#252525",
        8: "#1D1D1D",
        9: "#151515",
        10: "#000000",
      },
      semantics: {
        1: "#0ECE15",
        2: "#CE0E0E",
        3: "#CEC60E",
      },
    },
    borderColor: {
      base: {
        primary: "#509EB7",
        accent: "#6D6C6F",
      },
      gray: {
        1: "#ACACAC",
        2: "#C0C0C0",
        3: "#D7D7D7",
        4: "#EBEBEB",
        5: "#FFFFFF",
        6: "#343434",
        7: "#252525",
        8: "#1D1D1D",
        9: "#151515",
        10: "#000000",
      },
      semantics: {
        1: "#0ECE15",
        2: "#CE0E0E",
        3: "#CEC60E",
      },
    },
    extend: {},
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
