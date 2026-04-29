/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins_400Regular"],
        poppinsMedium: ["Poppins_500Medium"],
        poppinsSemiBold: ["Poppins_600SemiBold"],
        poppinsBold: ["Poppins_700Bold"],
      },
      colors: {
        background: {
          primary: "var(--color-background-primary)",
          secondary: "var(--color-background-secondary)",
        },
        surface: "var(--color-surface)",
        brand: {
          violet: "var(--color-primary-violet)",
          deep: "var(--color-deep-violet)",
        },
        accent: {
          amber: "var(--color-accent-amber)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
        },
        border: "var(--color-border)",
      },
    },
  },
  plugins: [],
}
