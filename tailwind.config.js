/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./src/**/*.{ts,tsx}'],
  important: '#root',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        page_gutter_lg: 'var(--page-gutter-lg)',
        header_height: 'var(--header)',
      },
      lineHeight: {
        header_height: 'var(--header)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
