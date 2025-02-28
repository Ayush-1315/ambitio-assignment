module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      keyframes: {
        "wave-in": {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "wave-out": {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(50px)" },
        },
      },
      animation: {
        "wave-in": "wave-in 0.3s ease-out forwards",
        "wave-out": "wave-out 0.2s ease-in forwards",
      },
    },
  },
  plugins: [],
};
