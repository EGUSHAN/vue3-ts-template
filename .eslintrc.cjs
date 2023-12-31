module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'plugin:prettier/recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        "plugin:prettier/recommended"
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    "parser": "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@typescript-eslint/parser'
    },
    plugins: [
        '@typescript-eslint',
        'vue',
    ],
    rules: {
        "import/no-unresolved": 'off',
        "import/extensions": 'off',
        'import/no-extraneous-dependencies': 'off'
    },
};
