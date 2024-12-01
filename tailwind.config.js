/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: '#f6f6f7',
          100: '#e1e3e7',
          200: '#c2c7d0',
          300: '#9ba3b3',
          400: '#787f93',
          500: '#5d6579',
          600: '#4a4f61',
          700: '#3d414f',
          800: '#333642',
          900: '#24262f',
          950: '#1a1b22',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        copper: {
          50: '#fdf4f1',
          100: '#f9e2db',
          200: '#f4c3b6',
          300: '#eca18c',
          400: '#e57a5c',
          500: '#dc5c3a',
          600: '#cb4422',
          700: '#a9371d',
          800: '#8b311e',
          900: '#732d1e',
        },
        parchment: {
          50: '#fdfcfa',
          100: '#f7f1e9',
          200: '#efe2d3',
          300: '#e4cdb3',
          400: '#d5b28d',
          500: '#c79768',
          600: '#b97f4d',
          700: '#9b6741',
          800: '#7f553a',
          900: '#684834',
        },
      },
    },
  },
  plugins: [],
};