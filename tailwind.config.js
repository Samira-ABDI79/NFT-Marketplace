const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        icons: "#ffdf2b",
    iconsLight: "#ffdf2b57",
    iconsBg: "#ffdf2b",
    shadowDark: "#555557",
    bgShadowDark: "#555557",
    shadowLight: "#232325",
    mainBg: "#232325",
    overlay: "#2323255e",
  
       
      },
      container: {
        center: true,
       
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      
      },
      fontFamily: {
        inter: ["inter", ...defaultTheme.fontFamily.sans],
        lobster: ["lobster", ...defaultTheme.fontFamily.sans],
      },
      rotate: { 135: "135deg", 45: "45deg  " },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      screens: {
        xs: "100%",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
