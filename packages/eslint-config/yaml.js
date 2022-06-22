module.exports = {
    extends: ['plugin:yml/standard', 'plugin:yml/prettier'],
    overrides: [
        {
            files: ['*.yaml', '*.yml'],
            rules: {
                'no-unused-labels': 'off',
            },
        },
    ],
}
