module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      keyframes: {
        waveIn: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        waveOut: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(50px)" },
        },
        rotateImage: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        floatingEffect: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        shake: {
          "0%": {
            transform: "translateX(0)",
          },
          "6.5%": {
            transform: "translateX(-6px) rotateY(-9deg)",
          },
          "18.5%": {
            transform: "translateX(5px) rotateY(7deg)",
          },
          "31.5%": {
            transform: "translateX(-3px) rotateY(-5deg)",
          },
          "43.5%": {
            transform: "translateX(2px) rotateY(3deg)",
          },
          "50%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "wave-in": "waveIn 0.3s ease-out forwards",
        "wave-out": "waveOut 0.2s ease-in forwards",
        "spin-slow": "rotateImage 10s linear infinite",
        "floating-effect": "floatingEffect 2s ease-in-out infinite",
        "waving-hand": "wave 2s linear infinite",
        shake: "shake 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
