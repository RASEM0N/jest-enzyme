module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    plugins: [
        '@typescript-eslint',
        'prettier',
        'jest',
        'promise',
        'react',
        'react-hooks',
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
        'prettier',
        'plugin:jest/recommended',
        // 'plugin:promise/recommended',
        'plugin:jest/style',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'arrow-body-style': ['error', 'always'],
        'prefer-arrow-callback': 'error',
        'arrow-spacing': 'error',
        'prefer-promise-reject-errors': 'off',
    },
}
