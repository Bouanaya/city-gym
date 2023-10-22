/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Domine", "Poppins"],
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        prumry: "#122530",
        text: "#c5470a",
      },
      backgroundImage: {
        imgHome: "url('../../public/img/pexels-scott-webb-136404.jpg')",
        imgInfo: "url('../../public/img/pexels-estudio-polaroid-3112004.jpg')",
        card: "url('../../public/img/pexels-julia-larson-6456153.jpg')",
        Form: "url(https://images.pexels.com/photos/4793203/pexels-photo-4793203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      },
    },
  },
};
