/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050419",
        primary: "#8C80E9",
        secondary: "#8F1970",
        accent: "#8F1970",
        "green-brand": "#00DC82",
      },
    },
    fontFamily: {
      onest: ["Onest"],
    },
  },
  plugins: [],
  darkMode: "class",
}
