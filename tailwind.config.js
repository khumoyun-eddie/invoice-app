/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#fff",
      red: {
        DEFAULT: "#EC5757",
        light: "#FF9797",
      },
      green: {
        DEFAULT: "#33d69f",
      },
      orange: {
        DEFAULT: "#ff8f00",
      },
      purple: {
        DEFAULT: "#7C5DFA",
        light: "#9277FF",
      },
      gray: {
        800: "#1E2139",
        700: "#141625",
        600: "#0C0E16",
        500: "#252945",
        400: "#7E88C3",
        300: "#888EB0",
        200: "#DFE3FA",
        100: "#F8F8FB",
      },
    },
    fontSize: {
      "body-1": ["12px", { lineHeight: "15px", letterSpacing: "-0.25px" }],
      "body-2": ["11px", { lineHeight: "18px", letterSpacing: "-0.23px" }],
      xs: [
        "12px",
        {
          lineHeight: "15px",
          letterSpacing: "-0.25px",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.8px",
        },
      ],
      lg: ["20px", { lineHeight: "22px", letterSpacing: "-0.63px" }],
      xl: ["32px", { lineHeight: "36px", letterSpacing: "-1px" }],
    },
    extend: {},
  },
  plugins: [],
};
