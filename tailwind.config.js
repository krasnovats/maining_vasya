/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mainColor: '#005BA9',
        hoverColor: '#DBCE88',
        bgDark: '#131619',
        
      },

      backgroundImage: {
        'modal': "url('/img/bg_modal.png')",
      },

      fontFamily: {
        'sans': ['"Geologica", sans-serif'],
      },

      keyframes: {
        "fade-in": {
          "from": {
            opacity: 0
          },
          "to": {
            opacity: 1
          },
        },  
        "fade-in-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-right-rotate": {
          "0%": {
            opacity: 0,
            transform: "translateX(-2000px) rotate(0deg)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px) rotate(720deg)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: 0,
            transform: "translateX(-1000px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
      },

      animation: {
        'fadeinright': 'fade-in-right-rotate 3s ease-in-out 3s 1',
        'fadeinright222': 'fade-in-right 2s ease-in-out 2s 1',
        'fadein': 'fade-in 2s ease-in-out 3s 1',
        'fadein_long': 'fade-in 2s ease-in-out 3s 1',
        'fadein_2': 'fade-in 2s ease-in-out 5s 1',
        'fadeinleft': 'fade-in-left 2s ease-in-out 3s 1',
        'fadeinleft_1': 'fade-in-left 2s ease-in-out 3.5s 1',
        'fadeinleft_2': 'fade-in-left 2s ease-in-out 4s 1',
        'fadeinright_1': 'fade-in-right 2s ease-in-out 3.5s 1',
        'fadeinright_2': 'fade-in-right 2s ease-in-out 4s 1',
        'bounce_news': 'bounce 1s 0.5',
        'bounce_1': 'bounce 1s 1',
        'spin-slow': 'spin 30s linear infinite',
        'spin-sloww': 'spin 50s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) 1',
        'ping_new': 'ping 2s cubic-bezier(0, 0, 0.2, 1) 1',
      },
      
      backgroundImage: {
        'arrowRight': 'url("./img/arrow_right")',
      },

      aspectRatio: {
        '4/3': '4 / 3',
      }, 

      padding: {
        big: '150px',
        mobileBig: '100px',
      },
     
      screens: {
        xs: '340px',
        sm: '500px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1535px',
      },

      boxShadow: {
        'xl': '0px 8px 24px 0px rgba(43, 71, 139, 0.20)',
      },
      lineHeight: {
        'leading-norm': '1.2',
      },
    },
  },
}

