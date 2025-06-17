// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,html}', // or wherever your files are
  ],
  theme: {
    extend: {
      lineHeight: {
        zero: '0',
      },
    },
  },
  plugins: [],
};
