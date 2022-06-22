module.exports = {
    extends: ['plugin:import/recommended', 'plugin:import/typescript'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'],
            },
        },
    },
    rules: {
        'import/no-unresolved': 'off',
        'import/no-named-as-default': 'off',
    },
}
