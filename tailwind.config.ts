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
        openSans: ["var(--font-open-sans)"]
      },

      colors: {
      // Background colors
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

        // Font colors
        darkFont: {
          default: "#000000"
        },
        lightFont: {
          default: "#555555"
        },
        lightFontBlue: {
          default: "#003B5C",
        },
        darkFontBlue: {
          default: "#222222",
        },
      },
    },
  },
  plugins: [],
}
export default config
