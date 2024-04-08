/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        lightGray: "#f4f4f5",
        darkGray: "#27272a",
        black: "#18181b",
        yellow: "#f59e0b",
        red: "#f43f5e",
        linkedin: "#0a66c2",
        github: "#0e1118",
      },
    },
  },
  plugins: [],
}
