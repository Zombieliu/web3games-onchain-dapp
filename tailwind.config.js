const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            screens:{
                "small":"375px",
                "xs" :"400px",

            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            height: {
                lg: '30rem',
                xl:'34rem',
                big:'40rem',
            },
            spacing:{
                '18':'4.5rem',
                "85":"21.5rem",
                '90':"23rem",
                "97":"28rem",
                '99': "32rem",
                '100':"33rem",
                '104':"38rem",
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
                    light: '#DB5E7F',
                    DEFAULT: '#DB5E7F',
                    dark: '#DB5E7F',
                },
                W3G2: {
                    light: '#876BD2',
                    DEFAULT: '#876BD2',
                    dark: '#8E6ACA',
                },
                W3G3: {
                    light: '#6E93E8',
                    DEFAULT: '#6E93E8',
                    dark: '#6E93E8',
                },
                custom:{
                    DEFAULT:'#8861D1',
                    light:"#8861D1",
                    dark:"#8861D1",
                },
                multipay:{
                    DEFAULT:'#CECECE',
                    light:"#CECECE",
                    dark:"#CECECE",
                }

            },
        },
        variants: {
            extend: {},
        },

    },
    plugins: [
        // require('flowbite/plugin')
        require('tailwind-scrollbar'),
        require('@tailwindcss/line-clamp'),
    ],
    variants: {
        scrollbar: ['rounded']
    }
}
