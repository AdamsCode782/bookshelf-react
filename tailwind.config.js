/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'], 
    },
    extend: {
      colors: {
        bookshelf: {
          indigo: {
            light: '#818cf8', // indigo-400
            DEFAULT: '#4f46e5', // indigo-600
            dark: '#3730a3', // indigo-800
          },
          neutral: {
            light: '#f8fafc',
            DEFAULT: '#f3f4f6',
            dark: '#1f2937',
          },
        },
      },
      fontSize: {
        huge: ['5rem', { lineHeight: '1' }], 
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
