module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js', // ← Add this line to skip babel.config.js
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['module:@react-native/babel-preset'],
        },
      },
    },
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },
  rules: {
    'react-native/no-inline-styles': 0,
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react/react-in-jsx-scope': 'off',
  },
};
