/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         // fontFamily: {
         //    merriweather: ['Merriweather', 'sans-serif'],
         //    ibm: ["IBM Plex Serif", 'serif'],
         // },
         fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            nunito: ['Nunito Sans', 'sans-serif'],
            jetbrains: ['JetBrains Mono', 'monospace'],
         },
         colors: {
            primary: "#F5F5F5", // Soft White for clear readability
            secondary: "#B0BEC5", // Cool Gray for subtle contrast
            tertiary: "#90A4AE", // Muted Blue-Gray for depth

            activeHover: "#00FFFF", // Neon Cyan for interactive elements
            highlight: "#cb9100", // Neon Pink for important details
            hover: "#00E5FF", // Bright Cyan for branding emphasis

            activeBg: "#121212", // True Black for modern elegance
            hoverBg: "#1E1E1E", // Dark Gray for soft contrast

            black: {
               DEFAULT: '#000',
               100: '#010103',
               200: '#0E0E10',
               300: '#1C1C21',
               500: '#3A3A49',
               600: '#1A1A1A',
            },
            white: {
               DEFAULT: '#FFFFFF',
               800: '#E4E4E6',
               700: '#D6D9E9',
               600: '#AFB0B6',
               500: '#62646C',
            },
         },

      },
   },
   plugins: [
      function ({ addComponents }) {
         addComponents({
            // Default styles
            '.avatar': {
               position: "relative",
               width: "98dvw",
               height: "92dvh", // Use vh for height-based responsiveness
            },
            '.flex-responsive': {
               flexDirection: "column", // Default to column
            },

            // Media query override
            '@media (max-height: 700px) and (min-width: 700px)': {
               '.flex-responsive': {
                  flexDirection: "row",
               },
               '.position-element': {
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "5rem"
               },
               '.avatar': {
                  position: "absolute",
                  top: "2rem",
                  right: "0",
                  width: "40dvw",
                  height: "85dvh",
               },
            },
         });
      },
   ],
}