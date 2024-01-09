/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      backgroundImage: {
        'bg-image': "url('./assets/image1.jpg')",
        'bg-mid': "url('./assets/imagemd.png')",
        'bg-sm':  "url('./assets/imagesm.png')"
      },
      fontFamily: {
        'montserrat': ['"Montserrat"', 'sans-serif'],
      },
      borderWidth: {
        '0': '1px',
      },
      fontSize: {
        'sm': '10px',
      },
      colors: {
        'blue': '#00214A',
      },
      boxShadow: {
        bs: "0px 1px  1px 0px #a9d4ff",
        bs1: "0px 8px  20px 0px #00214a19",
        lg: "0px 8px 40px 0px #00214a25"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
