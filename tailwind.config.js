module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "fm-very-dark-blue": "hsl(228, 11%, 9%)",
        "fm-dark-blue": "hsl(215, 23%, 14%)",
        "fm-medium-grey": "hsl(210, 19%, 18%)",
        "fm-light-grey": "hsl(217, 12%, 63%)",
        "fm-orange": "hsl(25, 97%, 53%)"
      }
    }
  },
  plugins: []
};
