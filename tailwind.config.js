module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#1a5d1a", // deep forest green
          50: "#f0f9f0", // very light green
          100: "#dcf2dc", // light green
          200: "#b8e5b8", // green-200
          300: "#94d794", // green-300
          400: "#70c970", // green-400
          500: "#4caf50", // green-500
          600: "#2d7d32", // green-600
          700: "#1a5d1a", // green-700
          800: "#0f4c0f", // green-800
          900: "#0a3a0a", // green-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#2d7d32", // green-600
          50: "#f1f8f1", // very light green
          100: "#e3f2e3", // light green
          200: "#c8e6c8", // green-200
          300: "#acdaac", // green-300
          400: "#91ce91", // green-400
          500: "#75c275", // green-500
          600: "#2d7d32", // green-600
          700: "#1b5e20", // green-700
          800: "#0f4c0f", // green-800
          900: "#0a3a0a", // green-900
        },
        // Accent Colors
        accent: {
          DEFAULT: "#ff6b35", // vibrant orange
          50: "#fff7f5", // very light orange
          100: "#ffede5", // light orange
          200: "#ffd6cc", // orange-200
          300: "#ffbfb3", // orange-300
          400: "#ffa899", // orange-400
          500: "#ff9180", // orange-500
          600: "#ff6b35", // orange-600
          700: "#e55a2b", // orange-700
          800: "#cc4921", // orange-800
          900: "#b23817", // orange-900
        },
        // Background Colors
        background: {
          DEFAULT: "#0f172a", // slate-900
          50: "#f8fafc", // slate-50
          100: "#f1f5f9", // slate-100
          200: "#e2e8f0", // slate-200
          300: "#cbd5e1", // slate-300
          400: "#94a3b8", // slate-400
          500: "#64748b", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1e293b", // slate-800
          900: "#0f172a", // slate-900
        },
        // Surface Colors
        surface: {
          DEFAULT: "#1e293b", // slate-800
          50: "#f8fafc", // slate-50
          100: "#f1f5f9", // slate-100
          200: "#e2e8f0", // slate-200
          300: "#cbd5e1", // slate-300
          400: "#94a3b8", // slate-400
          500: "#64748b", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1e293b", // slate-800
          900: "#0f172a", // slate-900
        },
        // Text Colors
        text: {
          primary: "#f8fafc", // slate-50
          secondary: "#94a3b8", // slate-400
          tertiary: "#64748b", // slate-500
          inverse: "#0f172a", // slate-900
        },
        // Status Colors
        success: {
          DEFAULT: "#10b981", // emerald-500
          50: "#ecfdf5", // emerald-50
          100: "#d1fae5", // emerald-100
          200: "#a7f3d0", // emerald-200
          300: "#6ee7b7", // emerald-300
          400: "#34d399", // emerald-400
          500: "#10b981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
          800: "#065f46", // emerald-800
          900: "#064e3b", // emerald-900
        },
        warning: {
          DEFAULT: "#f59e0b", // amber-500
          50: "#fffbeb", // amber-50
          100: "#fef3c7", // amber-100
          200: "#fde68a", // amber-200
          300: "#fcd34d", // amber-300
          400: "#fbbf24", // amber-400
          500: "#f59e0b", // amber-500
          600: "#d97706", // amber-600
          700: "#b45309", // amber-700
          800: "#92400e", // amber-800
          900: "#78350f", // amber-900
        },
        error: {
          DEFAULT: "#ef4444", // red-500
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          200: "#fecaca", // red-200
          300: "#fca5a5", // red-300
          400: "#f87171", // red-400
          500: "#ef4444", // red-500
          600: "#dc2626", // red-600
          700: "#b91c1c", // red-700
          800: "#991b1b", // red-800
          900: "#7f1d1d", // red-900
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'card': '0 1px 3px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)',
        'modal': '0 10px 15px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        'sm': '4px',
        'base': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-up': 'slideUp 300ms ease-in-out',
        'scale-in': 'scaleIn 200ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.transition-fast': {
          'transition': 'all 200ms ease-out',
        },
        '.transition-base': {
          'transition': 'all 300ms ease-in-out',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}