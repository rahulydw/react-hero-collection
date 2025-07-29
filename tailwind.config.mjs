// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js app directory
    "./components/**/*.{js,ts,jsx,tsx}", // components
    "./pages/**/*.{js,ts,jsx,tsx}", // if using pages directory
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oxygen", "sans-serif"],
        serif: ["Playfair", "serif"],
        tinos: ["Tinos", "serif"],
        lobster: ["Lobster", "cursive"],
        playfair: ["Playfair", "serif"],
        poppins: ["Poppins", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        dmSerif: ["DM Serif Display", "serif"],
      },

    },
  },
  plugins: [],
};
