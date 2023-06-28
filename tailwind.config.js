/** @type {import('tailwindcss').Config} */
export default {
  content: ['src/**/*.{js,jsx,css}'],
  jit: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0.5rem',
      },
    },
  },
  plugins: [],
};
