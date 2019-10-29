module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
  "strict": "off",
  "indent": ["error", "tab"],
  "linebreak-style": ["error", "unix"],
  "quotes": ["error", "double"],
  "semi": ["error", "always"],
  "no-underscore-dangle": "off",
  "no-tabs": "off",
  "no-shadow": "off"
  },
};