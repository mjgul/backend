/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ededed",
        primary: "#3b82f6", // Blue for backend/tech feel
        secondary: "#10b981", // Green for Node/success
        accent: "#8b5cf6", // Purple for modern feel
        card: "#171717",
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'], // Terminal feel
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
