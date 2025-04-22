/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#25B021',
      },
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'hero-title': ['90px', { lineHeight: '100px', letterSpacing: '0' }],
      },
    },
  },
  plugins: [],
}
