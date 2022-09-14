const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            height: {
                lg: '30rem',
                xl:'34rem',
                big:'40rem',
            },
            spacing:{
                '18': '4.5rem',
                '90':"23rem",
                "97":"28rem",
                '99': "32rem",
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                W3GButtonColor:{
                    light: '#7BE0D6',
                    DEFAULT: '#7BE0D6',
                    dark: '#7BE0D6',
                },
                W3GBG: {
                    light: '#151515',
                    DEFAULT: '#151515',
                    dark: '#151515',
                },
                W3GNavigationBorder: {
                    light: '#222222',
                    DEFAULT: '#222222',
                    dark: '#222222',
                },
                W3GInfoBG: {
                    light: '#262626',
                    DEFAULT: '#262626',
                    dark: '#262626',
                },
                W3GInfoBorderBG: {
                    light: '#343434',
                    DEFAULT: '#343434',
                    dark: '#343434',
                },
                W3GTopBG: {
                    light: '#131414',
                    DEFAULT: '#131414',
                    dark: '#131414',
                },
                W3G1: {
                    light: '#D65D7F',
                    DEFAULT: '#D65D7F',
                    dark: '#D65D7F',
                },
                W3G2: {
                    light: '#6A8CE9',
                    DEFAULT: '#6A8CE9',
                    dark: '#6A8CE9',
                },
                W3G3: {
                    light: '#7AE0D5',
                    DEFAULT: '#7AE0D5',
                    dark: '#7AE0D5',
                },
                custom:{
                    DEFAULT:'#47BCBC',
                    light:"#47BCBC",
                    dark:"#47BCBC",
                }

            },
        },
        variants: {
            extend: {},
        },

    },
    plugins: [
        // require('flowbite/plugin')
        require('tailwind-scrollbar')
    ],
    variants: {
        scrollbar: ['rounded']
    }
}
