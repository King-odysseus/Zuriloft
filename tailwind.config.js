/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1e3a8a',
        gold: '#f59e0b',
        charcoal: '#1f2937',
        'cool-grey': '#6b7280',
        'light-grey': '#f3f4f6',
        'border-grey': '#d1d5db',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui, 'flowbite/plugin'],
  daisyui: {
    themes: [
      {
        zuriloft: {
          primary: '#1e3a8a',      // Navy Blue
          secondary: '#f59e0b',    // Gold
          accent: '#f59e0b',       // Gold
          neutral: '#f3f4f6',      // Light Grey
          'base-100': '#ffffff',   // White
          'base-200': '#f3f4f6',   // Light Grey
          'base-300': '#d1d5db',   // Grey
          'base-content': '#1f2937', // Charcoal
          'primary-content': '#ffffff', // White on primary
          'secondary-content': '#1f2937', // Charcoal on secondary
        },
      },
    ],
  },
}
