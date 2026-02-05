/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
    './data/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        night: '#06061a',
        panel: 'rgba(255,255,255,0.03)',
        accentCyan: '#00d2ff',
        accentPurple: '#7b61ff'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 30px rgba(0, 210, 255, 0.35)'
      },
      backgroundImage: {
        accent: 'linear-gradient(135deg, #00d2ff 0%, #7b61ff 100%)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
        gradientShift: 'gradientShift 12s ease infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 12px rgba(123, 97, 255, 0.2)' },
          '50%': { boxShadow: '0 0 24px rgba(0, 210, 255, 0.5)' }
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      }
    }
  },
  plugins: []
};
