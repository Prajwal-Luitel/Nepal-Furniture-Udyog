/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f7f7f7f7",
        secondary: "#2e3192",
        tertiary: "#d5133a",
      },
    },
  },
  plugins: [],
};
