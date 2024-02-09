import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      fontFamily: {
        visby: ["var(--font-visby)"],
        poppins: ["var(--font-poppins)"],
      },

      fontColors: {
        light: {
          default: "#555555"
        },
        dark: {
          default: "#000000"
        },
        lightBlue: {
          default: "#003B5C",
        },
        darkBlue: {
          default: "#222222",
        },
      },

      colors: {
        lightBlue: {
          default: "#E6F6FF",
        },
        darkBlue: {
          default: "#003B5C",
        },
        whiteBg: {
          default: "#FFFFFF",
        },
        lightGreyBg: {
          default: "#FAFAFA",
        },
      },
    },
  },
  plugins: [],
}
export default config
