// @ts-check

/** @type {import('tailwindcss').Config} */
const preset = {
  theme: {
    extend: {
      colors: {
        cmv: {
          primary: {
            50: "var(--cmv-primary-50)",
            100: "var(--cmv-primary-100)",
            200: "var(--cmv-primary-200)",
            300: "var(--cmv-primary-300)",
            400: "var(--cmv-primary-400)",
            500: "var(--cmv-primary-500)",
            600: "var(--cmv-primary-600)",
            700: "var(--cmv-primary-700)",
            800: "var(--cmv-primary-800)",
            900: "var(--cmv-primary-900)",
          },
          neutral: {
            50: "var(--cmv-neutral-50)",
            100: "var(--cmv-neutral-100)",
            200: "var(--cmv-neutral-200)",
            300: "var(--cmv-neutral-300)",
            400: "var(--cmv-neutral-400)",
            500: "var(--cmv-neutral-500)",
            600: "var(--cmv-neutral-600)",
            700: "var(--cmv-neutral-700)",
            800: "var(--cmv-neutral-800)",
            900: "var(--cmv-neutral-900)",
          },
          success: "var(--cmv-success)",
          "success-light": "var(--cmv-success-light)",
          error: "var(--cmv-error)",
          "error-light": "var(--cmv-error-light)",
          warning: "var(--cmv-warning)",
          "warning-light": "var(--cmv-warning-light)",
        },
      },
      spacing: {
        "cmv-xs": "4px",
        "cmv-sm": "8px",
        "cmv-md": "16px",
        "cmv-lg": "24px",
        "cmv-xl": "32px",
        "cmv-2xl": "48px",
        "cmv-3xl": "64px",
      },
      fontSize: {
        "cmv-xs": ["12px", { lineHeight: "16px" }],
        "cmv-sm": ["14px", { lineHeight: "20px" }],
        "cmv-base": ["16px", { lineHeight: "24px" }],
        "cmv-lg": ["18px", { lineHeight: "28px" }],
        "cmv-xl": ["20px", { lineHeight: "28px" }],
        "cmv-2xl": ["24px", { lineHeight: "32px" }],
        "cmv-3xl": ["30px", { lineHeight: "36px" }],
      },
      borderRadius: {
        "cmv-sm": "4px",
        "cmv-md": "8px",
        "cmv-lg": "12px",
        "cmv-xl": "16px",
      },
    },
  },
};

module.exports = preset;
