// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'nexgen-gradient': 'linear-gradient(135deg, #C4FF00, #00FF90)',
        'waitlist-gradient': 'linear-gradient(135deg, #000000, #ffaf9f, #ffafa2, #ffafa3, #ffb1a3, #ffb1a5, #ffb2a4)',
      },
    },
  },
  plugins: [],
};
