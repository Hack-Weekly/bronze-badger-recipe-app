/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      primary:{
        color:'#4E46B4',
        hover: '#4840a5',
        buttonText: '#EBEBEB',
        bodyText: '#000000'
      },
      secondary: {
        color:'#40A69F',
        hover:'#50ada7',
        buttonText: '#000000',
        bodyText:'#999CA0'
      },
      borderColor:{
        color:'#EBEBEB',
        hover:'#d7d7d7'
      },
      background:'#F5F5F5',
      backdrop:'#464749'
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
