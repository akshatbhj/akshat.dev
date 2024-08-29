/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      VT323: ["VT323", "monospace"],
      SpaceMono: ["Space Mono", "monospace"],
      UbuntuMono: ["Ubuntu Mono", "monospace"],
      firaCode: ["Fira Code", "monospace"],
      Rye: ["Rye", "cursive"],
    },
    extend: {},
  },
  plugins: [],
};
