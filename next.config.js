const { i18n } = require('./next-i18next.config');

module.exports = {
    eslint: {
        dirs: ['src'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    },
    i18n,
}
