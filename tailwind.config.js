/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#071a2d',
        ocean: '#0b2545',
        electric: '#3b82f6',
        violet: '#8b5cf6',
        cyan: '#22d3ee',
        slateSoft: '#dfeaf8',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59,130,246,0.2), 0 25px 70px rgba(37, 99, 235, 0.35)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top left, rgba(59,130,246,0.25), transparent 30%), radial-gradient(circle at bottom right, rgba(139,92,246,0.18), transparent 35%)',
      },
    },
  },
  plugins: [],
}
