/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryBlue: "#5F35F5",
        FontColor: '#11175D',
        SecoundColor: '#0000006b',
      },
      fontFamily:{
        nonito : ["Nunito", 'sans-serif']
      }
    },
  },
  plugins: [],
};
