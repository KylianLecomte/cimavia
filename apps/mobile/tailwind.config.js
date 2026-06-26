// @ts-check
const cmvPreset = require("@cmv/tokens/tailwind-preset");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./feature/**/*.{js,jsx,ts,tsx}",
    "./shared/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset"), cmvPreset],
  theme: {
    extend: {},
  },
  plugins: [],
};
