/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    
    extend: {
      aniamation : {
        'slideFromLeft': '500 slideLeft'
      },
      screens : {
        'xs' :"450px"
      },
      backgroundImage : {
          'vector':  'url(/vector.svg)',
          'footer' : 'url(/footer.jpg)',
      },
      colors: {
        'dark-primary': '#13161c',
        'dark-blue': '#080d18',
        'text-primary' : '#303948',
        'dark-button' : '#14213D',
        'text-gray' : "#59616D"
      },
      borderRadius : {
        'button' : "35px",
        'default' : "35px"
      }
    },
    keyframes : {
      'slideLeft' : {
        '0%' : {
          translateY: '100%'
        },
        '100%' : {
          translateY : '0%'
        }
      }
    }
  },
  plugins: [],
};
