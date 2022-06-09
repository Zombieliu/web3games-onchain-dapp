const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
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
        },
        variants: {
            extend: {},
        },
        plugins: [
            // require('flowbite/plugin')
        ],
    }
}
