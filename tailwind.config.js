/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#f7e38c",
          "secondary": "#26efbd",
          "accent": "#dd182f",
          "neutral": "#15141F",
          "base-100": "#F4F5F6",
          "info": "#8FB6E5",
          "success": "#63E9D0",
          "warning": "#E09E06",
          "error": "#F08775",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
