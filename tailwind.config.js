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
        "purpur-100": "#E0AAFF",
        "purpur-200": "#C77DFF",
        "purpur-300": "#9D4EDD",
        "purpur-400": "#7B2CBF",
        "purpur-500": "#5A189A",
        "purpur-600": "#3C096C",
        "purpur-700": "#240046",
        "purpur-800": "#10002B",
      },
    },
    fontFamily: {
      onest: ["Onest"],
    },
  },
  plugins: [],
  darkMode: "class",
}
