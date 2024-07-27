/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004d40', // dark green
          light: '#00796b',   // soft green
          dark: '#00251a',    // darker shade of green
        },
        secondary: {
          DEFAULT: '#ff5722', // light orange
          light: '#ff8a50',   // soft orange
          dark: '#bf360c',    // darker shade of orange
        },
        tertiary: {
          DEFAULT: '#ffc107', // amber
          light: '#ffd54f',   // light amber
          dark: '#ffa000',    // darker shade of amber
        },
        neutral: {
          cream: '#f5f5f5',
          charcoal: '#333333',
          'primary-text': '#212121',
          'secondary-text': '#757575',
          border: '#e0e0e0',
        },
      },
    },
  },
  plugins: [],
};
