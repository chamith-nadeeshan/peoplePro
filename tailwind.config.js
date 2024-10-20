/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backgroundColor': '#F7F9FF',
        'mainColor': '#2B50EE',
        'errorBoxBg': '#FFD1D1',
        'errorTxtColor': '#FB0000',
        'inputBgColor': '#F4F4F4'
      },
      fontFamily: {
        roboto_condesed: ["Roboto Condensed", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      }
      
    },
  },
  plugins: [],
}