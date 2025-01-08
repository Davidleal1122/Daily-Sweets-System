module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        yellow: {
          50: '#fffce7',
          100: '#fff9c2',
          500: '#ffc107',
          600: '#ffab00',
        },
        pink: {
          300: '#fda4af',
        },
      },
    },
  },
  plugins: [],
};
