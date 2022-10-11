/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], 
  safelist: [
    'bg-indigo-600',
    'bg-orange-900',
    'shadow-red-500',
    'shadow-yellow-300',
    'shadow-gray-300'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
