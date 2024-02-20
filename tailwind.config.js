/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage:{
        "hero":"url('https://ik.imagekit.io/7ymcb1ihc/tripsweet/wepik-export-20240215055759GFU4.jpeg?updatedAt=1707976762269')"
      }
    },
 
  },
  plugins: [],
}