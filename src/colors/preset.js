/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import { colors } from './colors.ts';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createThemes } = require('tw-colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      plex: ['IBM Plex Mono', 'monospace'],
    },
  },
  plugins: [
    createThemes({
      neon_blue: {
        primary: colors.greenNeon,
        secondary: colors.blueBright,
      },
      neon_cyan: {
        primary: colors.darkTeal,
        secondary: colors.cyanBright,
      },
    }),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.paragraph': {
          fontSize: '18px',
          fontWeight: '400',
          fontFamily: theme('fontFamily.plex'),
          lineHeight: '16px',
          fontStyle: 'normal',
        },
      });
    }),
  ],
};
