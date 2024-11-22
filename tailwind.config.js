/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themePrimary: '#01260D',
        themePrimaryLighter: '#024718',


        
      },
      boxShadow: {
        boxShadow: '0px 3px 6px rgba(0, 119, 111, 0.08)',
        sectionShadow: '0px 6px 24px rgba(6, 129, 121, 0.08)',
        card: '0px 20px 32px -8px rgba(6, 129, 121, 0.16)',
        owlCard: '0px 6px 12px -4px rgba(6, 129, 121, 0.1)',
        searchShadow: '0px 12px 32px -6px rgba(0, 119, 111, 0.2)',
        filterShadow: '0px 2px 6px rgba(6, 129, 121, 0.08)',
        frontShadow: ' 0px 24px 24px -12px rgba(6, 129, 121, 0.12)',
      },
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1350px',
      },
    },
  },
  plugins: [],
};
