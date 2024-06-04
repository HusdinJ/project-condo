/** @type {import('tailwindcss').Config} */

import { root } from 'postcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Italiana' : ['Italiana', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.075em',
        tight: '-0.05em',
        normal: '0em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.25em',
        custom: '1em', // custom spacing
      }
    },
  },
  plugins: [require('daisyui'),],
}