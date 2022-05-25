/* eslint-disable @typescript-eslint/no-var-requires, n/no-unpublished-require */
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  env: {
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:n/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // ref. https://github.com/weiran-zsd/eslint-plugin-node#readme
    'n/no-missing-import': 'off',
    'n/no-unsupported-features/es-syntax': 'off',
    // for Map
    '@typescript-eslint/no-non-null-assertion': 'off',
    // for try..catch
    '@typescript-eslint/no-implicit-any-catch': [
      'error',
      { allowExplicitAny: true },
    ],
    // loosen
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
  },
});