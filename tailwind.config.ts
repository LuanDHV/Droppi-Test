import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        beVietnamPro: ["Be Vietnam Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
