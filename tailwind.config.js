/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'agri-green': '#38a169', // Primary Green
        'agri-dark': '#1c4532',  // Darker accent
        'agri-gold': '#d69e2e',  // Accent/Subscription Gold
        'agri-earth': '#f0fdf4', // Light background
        'agri-brown': '#7c4d1c', // Earth tone
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
