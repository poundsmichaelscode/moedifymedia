/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#05A8B6',
          cyan: '#7BDDE4',
          navy: '#0B3042',
          deep: '#06151D',
          green: '#3AA657',
          gold: '#F4C430',
          cream: '#F7FBFB'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 24px 80px rgba(5,168,182,0.28)',
        gold: '0 18px 55px rgba(244,196,48,0.32)'
      },
      backgroundImage: {
        'brand-radial': 'radial-gradient(circle at top left, rgba(123,221,228,.35), transparent 36%), radial-gradient(circle at bottom right, rgba(244,196,48,.20), transparent 30%)'
      }
    }
  },
  plugins: []
}
