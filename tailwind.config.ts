import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    colors: {
      slate: colors.slate,
      rose: colors.rose,
    },
    fontFamily: {
      default: ['Roboto, sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
