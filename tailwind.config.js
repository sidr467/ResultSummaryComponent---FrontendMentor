/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],

  theme: {
    extend: {
      colors: {
        PrimaryLightRed: "hsl(0, 100%, 67%)",
        PrimaryOrangeyYellow: " hsl(39, 100%, 56%)",
        PrimaryGreenTeal: "hsl(166, 100%, 37%)",
        PrimaryCobaltblue: "hsl(234, 85%, 45%)",
        BgLightslateBlue: "hsl(252, 100%, 67%)",
        BgLightroyalBlue: "hsl(241, 81%, 54%)",
        CircleVioletBlue: "hsla(256, 72%, 46%, 1)",
        CirclePersianBlue: "hsla(241, 72%, 46%, 0)",
        White: "hsl(0, 0%, 100%)",
        PaleBlue: "hsl(221, 100%, 96%)",
        LightLavender: "hsl(241, 100%, 89%)",
        DarkgrayBlue: "hsl(224, 30%, 27%)",
      },
      fontSize: {
        ParaFont: "18px",
      },
      fontWeight: {
        Fontlight: "500",
        Fontmedium: "700",
        Fontbold: "800",
      },
      fontFamily: {
        FontHanken: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}
