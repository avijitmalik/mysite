/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGrayBg:'#3B453B',
        customGrayBorder:'#C2C3C2',
      },
      gap: {
        '11': '3.75rem',
      },
      margin:{
        "pxa": "10rem",
      },
      wl:{
        "w":"w-5/6",
        "wd":"24%",
      },
      rounded:{
        "xl" :"1rem",
        "2xl" : "26px"
      },
      maxauto:{
        "mxw":"520px"
      }
    },
  },
  plugins: [],
}

