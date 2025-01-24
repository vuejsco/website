/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'vue-green': '#42b883',
        'vue-dark': '#35495e',
      },
    },
  },
  plugins: [],
}