module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "synthwave"],
  },
  plugins: [require("daisyui")],
}