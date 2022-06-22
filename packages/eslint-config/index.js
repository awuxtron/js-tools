module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        sourceType: 'module',
    },
    reportUnusedDisableDirectives: true,
    extends: [
        'eslint:recommended',
        'plugin:eslint-comments/recommended',
        '@awuxtron/eslint-config/html',
        '@awuxtron/eslint-config/import',
        '@awuxtron/eslint-config/json',
        '@awuxtron/eslint-config/yaml',
        '@awuxtron/eslint-config/md',
        '@awuxtron/eslint-config/promise',
        '@awuxtron/eslint-config/unicorn',
        '@awuxtron/eslint-config/typescript',
        '@awuxtron/eslint-config/vue',
        '@awuxtron/eslint-config/prettier',
    ],
    ignorePatterns: ['dist', 'public', 'node_modules'],
}
