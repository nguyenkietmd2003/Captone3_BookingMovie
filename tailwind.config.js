/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px", min: "993px" },
        lg: { max: "992px", min: "768px" },
        md: { max: "767px" },
        sm: { max: "639px" },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
};

//B1: npm instal -D tailwindcss

//B2: npx tailwindcss init

//B3: input css
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

//B4: change in file tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
