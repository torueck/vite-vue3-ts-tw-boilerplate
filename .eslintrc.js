module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/prettier',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: [],
  rules: {},
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['*.vue'],
      rules: {
        // For now we have to disable this because e.g. props are created in <script setup> but not referenced otherwise.
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
