module.exports = {
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
            extends: 'plugin:vue/vue3-recommended',
            rules: {
                '@typescript-eslint/no-unused-vars': 'off',
                'no-undef': 'off',
                'no-unused-vars': 'off',
                'vue/multi-word-component-names': 'off',
                'vue/no-setup-props-destructure': 'off',
                'vue/no-v-html': 'off',
            },
        },
    ],
}
