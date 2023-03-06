/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColour: "#FF1276",
        secondaryColour: "#959595",
      },
      dropShadow: {
        custom: "5px 7px 23px rgba(255, 18, 118, 0.35)",
      },
      fontSize: {
        custom32px: ["32px", "24px"],
        custom24px: ["24px", "24px"],
        custom16px: ["16px", "24px"],
        custom20px: ["20px", "30px"],
      },
    },
  },
  plugins: [],
};
