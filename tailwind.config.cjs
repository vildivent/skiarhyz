/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      h: ["Comfortaa", "cursive"],
      text: ["Balsamiq Sans", "cursive"],
      logo: ["Russo One", "sans-serif"],
    },
    extend: {
      colors: {
        "blue-1": "#9DCBE4",
        "blue-2": "#357BB6",
        "blue-3": "#006CD1",
        "blue-4": "#144276",
        "gray-1": "#CCCCCC",
        "gray-2": "#474E52",
        "gray-3": "#333333",
        "gray-4": "#2C2D2D",
        "gray-5": "#262626",
        "gray-6": "#1E1E1E",
        "white-1": "#F5F5F5",
        "orange-1": "#FFAF18",
      },
    },
  },
  plugins: [],
};
