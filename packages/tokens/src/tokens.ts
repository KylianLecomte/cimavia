export const cmvColors = {
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
  success: {
    DEFAULT: "var(--cmv-success)",
    light: "var(--cmv-success-light)",
  },
  error: {
    DEFAULT: "var(--cmv-error)",
    light: "var(--cmv-error-light)",
  },
  warning: {
    DEFAULT: "var(--cmv-warning)",
    light: "var(--cmv-warning-light)",
  },
} as const;

export const cmvSpacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  "2xl": "48px",
  "3xl": "64px",
} as const;

export const cmvFontSize = {
  xs: ["12px", { lineHeight: "16px" }],
  sm: ["14px", { lineHeight: "20px" }],
  base: ["16px", { lineHeight: "24px" }],
  lg: ["18px", { lineHeight: "28px" }],
  xl: ["20px", { lineHeight: "28px" }],
  "2xl": ["24px", { lineHeight: "32px" }],
  "3xl": ["30px", { lineHeight: "36px" }],
} as const satisfies Record<string, [string, { lineHeight: string }]>;

export const cmvBorderRadius = {
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "9999px",
} as const;
