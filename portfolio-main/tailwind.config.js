/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' }
        },
        'vintage-reveal': {
          '0%': { 
            transform: 'translateY(20px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        'vintage-fade': {
          '0%': { 
            opacity: '0',
            filter: 'blur(4px)'
          },
          '100%': { 
            opacity: '1',
            filter: 'blur(0)'
          }
        },
        'ornament-spin': {
          '0%': { 
            transform: 'rotate(0deg) scale(0)',
            opacity: '0'
          },
          '100%': { 
            transform: 'rotate(180deg) scale(1)',
            opacity: '1'
          }
        }
      },
      animation: {
        typewriter: 'typewriter 2s steps(40, end)',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        slideUp: 'slideUp 0.5s ease-out forwards',
        glitch: 'glitch 0.5s ease-in-out infinite',
        'vintage-reveal': 'vintage-reveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'vintage-fade': 'vintage-fade 2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'ornament-spin': 'ornament-spin 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards'
      }
    },
  },
  plugins: [],
};
