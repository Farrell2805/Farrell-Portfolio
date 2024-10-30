/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px"
    },
    extend: {
      colors: {
        primary: '#0033cc',
        secondary: '#00cc00', 
        paragraph: '#E0E0E0', 
        white: '#ffffff', 
        black: '#000000', 
        dark: '#0C0C0C', 
        darkLight: '#F2613F', 
      },
      keyframes: {
        move: {
          "50%" : {transform: 'translateY(-1rem)'}
        },
        "loop-scroll" : {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"},
        },

      },
      animation: {
        'movingY' : 'move 2s linear infinite',
        "loop-scroll" : "loop-scroll 20s linear infinite"
      },
    },
    container: {
      center : true,
      padding: {
        DEFAULT : '1rem',
        sm : '1.5rem'
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'], 
      robot: ['Roboto', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif'],
    },
  },
  plugins: [],
}

