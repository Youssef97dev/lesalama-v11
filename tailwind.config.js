/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color_1: "var(--color-1)",
        color_2: "var(--color-2)",
        color_3: "var(--color-3)",
        color_4: "var(--color-4)",
      },
      animation: {
        "slide-left": "slideLeft 2s ease-in-out forwards",
        "slide-right": "slideRight 2s ease-in-out forwards",
        "scale-3d": "scale3D 1.8s ease-in-out forwards",
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        scale3D: {
          "0%": { transform: "scale(1) rotateX(0deg)" },
          "100%": { transform: "scale(1.8) rotateX(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
