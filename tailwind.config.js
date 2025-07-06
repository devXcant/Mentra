/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        primary: "#0075ff",
        gray: "#858585",
        bg_gray: "#f2f2f2",
        green: "#24b351",
        light_green: "#dbffdd",
        red: "#f51c0c",
        light_red: "#ffc8c4",
      },
      fontFamily: {
        satoshi: ["satoshi"],
        "satoshi-bold": ["satoshi-bold"],
      },
    },
  },
  plugins: [],
};
