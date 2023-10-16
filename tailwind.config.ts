import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    colors: {
      pink: "pink",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
