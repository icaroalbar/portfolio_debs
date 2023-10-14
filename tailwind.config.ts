import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          10: '#C8FF17',
          20: '#8AE858',
          30: '#F0B922',
        },
        secondary: {
          10: '#FF0174',
          20: '#C00057'
        },
        blue: {
          10: '#56E3FF',
          20: '#41AABF',
        },
      }
    },
  },
  plugins: [],
}
export default config
