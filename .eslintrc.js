module.exports = {
  env: {
    browser: true,
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
  plugins: [
    'react',
  ],
  rules: {
    "strict": "off",
    "no-underscore-dangle": "off",
    "no-shadow": "off",
  },
};