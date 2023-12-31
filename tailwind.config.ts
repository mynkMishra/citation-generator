import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      "nav-bg": "#fbfbfa",
      "nav-item-text": "#191711",
      "nav-item-active": "#000000",
      "search-option": "#37352f",
    },
    borderWidth: {
      "1": "1px",
    },
    borderRadius: {
      "4px": "4px",
      "6px": "6px",
      "32px": "32px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "24px": "24px",
        "32px": "32px",
        "48px": "48px",
        "240px": "240px",
      },
      spacing: {
        "8px": "8px",
        "12px": "12px",
        "24px": "24px",
        "32px": "32px",
        "10%": "10%",
      },
    },
  },
  plugins: [],
};
export default config;
