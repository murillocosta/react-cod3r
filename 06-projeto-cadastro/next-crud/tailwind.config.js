/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'from-green-400',
    'from-blue-400',
    'from-gray-400',
    'from-red-400',
    'to-gray-700',
    'to-gray-600',
    'to-blue-600',
    'to-green-600',
    'to-red-600',
    'shadow-green-500/50',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
