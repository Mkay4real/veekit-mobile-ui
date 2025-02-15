
// const { hairlineWidth } = require('nativewind/theme');
const plugin = require('tailwindcss/plugin');
const { default: themeColors } = require('./src/theme/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    '.src/components/**/*.{ts,tsx}'
  ],
  // presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        ...themeColors
      },
      // borderWidth: {
      //   hairline: hairlineWidth(),
      // },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      screens: {
        sm: '380px',
        md: '420px',
        lg: '680px',
        // or maybe name them after devices for `tablet:flex-row`
        tablet: '1024px',
      },
      fontFamily: {
        regular: ['DMSans-Regular', 'sans-serif'],
        medium: ['DMSans-Medium', 'sans-serif'],
        semibold: ['DMSans-SemiBold', 'sans-serif'],
        bold: ['DMSans-Bold', 'sans-serif'],
      },
      fontWeight: null,
      fontSize: {
        xs: 12,
        sm: 14,
        base: 16,
        md: 16,
        lg: 18,
        xl: 20,
        '2xl': 24,
        '3xl': 28,
        '4xl': 35,
        '5xl': 60,
      },
      lineHeight: {
        xs: 1.33, // 16 / 12
        sm: 1.43, // 20 / 14
        base: 1.5, // 24 / 16
        md: 1.5, // 24 / 16
        lg: 1.44, // 26 / 18
        xl: 1.4, // 28 / 20
        '2xl': 1.25, // 30 / 24
        '3xl': 1.29, // 36 / 28
        '4xl': 1.26, // 44 / 35
        '5xl': 1, // 60 / 60
      },
      letterSpacing: {
        xs: '0.04px',
        sm: '0',
        base: '0.5px',
        md: '0.5px',
        lg: '-0.04px',
        xl: '-0.08px',
        '2xl': '-0.1px',
        '3xl': '-0.12px',
        '4xl': '-0.16px',
        '5xl': '-0.4px',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      const newUtilities = {}
      const sizes = ['xs', 'sm', 'md', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']
      const styles = ['body', 'title', 'head', 'bold']

      const styleFontFamilyMap = {
        body: 'regular',
        title: 'medium',
        head: 'semibold',
        bold: 'bold',
      }

      // sizes.forEach(size => {
      //   styles.forEach(style => {
      //     newUtilities[`.text-${size}-${style}`] = {
      //       fontSize: (`fontSize.${size}`),
      //       lineHeight: (`lineHeight.${size}`),
      //       fontFamily: (`fontFamily.${styleFontFamilyMap[style]}`),
      //       letterSpacing: (`letterSpacing.${size}`),
      //       // fontSize: theme(`fontSize.${size}`),
      //       // lineHeight: theme(`lineHeight.${size}`),
      //       // fontFamily: theme(`fontFamily.${styleFontFamilyMap[style]}`),
      //       // letterSpacing: theme(`letterSpacing.${size}`),
      //     }
      //   })
      // })

      addUtilities(newUtilities)

    }),
  ],

};

