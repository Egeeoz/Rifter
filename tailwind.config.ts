import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        card: 'var(--card)',
        hover: 'var(--hover)',
      },
    },
  },
  plugins: [],
};

export default config;
