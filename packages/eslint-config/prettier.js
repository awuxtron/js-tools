module.exports = {
    extends: ['plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                printWidth: 120,
                tabWidth: 4,
                semi: false,
                singleQuote: true,
                htmlWhitespaceSensitivity: 'ignore',
                vueIndentScriptAndStyle: true,
            },
        ],
    },
}
