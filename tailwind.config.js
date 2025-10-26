/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Hathira Clinic Brand Colors
        primary: {
          50: '#fdf7f6',
          100: '#f9ede9',
          200: '#f2d9d1',
          300: '#e8c0b5',
          400: '#d4a59a', // Main accent color
          500: '#c39489',
          600: '#b5837a',
          700: '#a6726b',
          800: '#8c6b61',
          900: '#6b5049',
        },
        secondary: {
          50: '#fef7f7',
          100: '#fdeaea',
          200: '#fbd5d5',
          300: '#f7b5b5',
          400: '#f08a8a',
          500: '#e55a5a',
          600: '#d13d3d',
          700: '#b02d2d',
          800: '#922929',
          900: '#7a2626',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // Custom theme colors
        'theme-accent': '#D4A59A',
        'theme-bg': '#fefaf4',
        'theme-text': '#4A4A4A',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Geist', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'gradient': 'gradientBG 15s ease infinite',
        'pulse-green': 'pulseGreen 2.5s infinite',
        'pulse-blue': 'pulseBlue 2.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientBG: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        pulseGreen: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)' },
          '50%': { transform: 'scale(1.1)', boxShadow: '0 0 0 15px rgba(37, 211, 102, 0)' },
        },
        pulseBlue: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(0, 123, 255, 0.7)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 0 15px rgba(0, 123, 255, 0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(-45deg, #e1c0b5, #c39489, #8c6b61, #4a4a4a)',
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
    },
  },
  plugins: [],
}

