const path = require('path');

module.exports = {
    i18n: {
        locales: ['es', 'en', 'it'],
        defaultLocale: 'es',
        localePath: path.resolve('./public/locales'),
    },
};
