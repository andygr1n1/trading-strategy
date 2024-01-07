/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      roboto: ['Roboto']
    },

    extend: {
      // gradient is important for compatibility with layer classes
      colors: { gradient: '' },
      animation: {
        opacity: 'opacity 0.300s ease-in',
        'opacity-md': 'opacity 1s ease-in'
      },
      keyframes: {
        opacity: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        }

      }
    }
  },
  plugins: [require('tailwind-scrollbar')]
}
