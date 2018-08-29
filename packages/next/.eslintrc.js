const OFF = 0;
const ERROR = 2;

module.exports = {
  parser: 'babel-eslint',

  extends: [
    'airbnb',
  ],

  plugins: [
    'import',
    'react',
    'jsx-a11y',
  ],

  rules: {
    // eslint
    // ============
    'semi': OFF,
    'no-console': OFF,
    'no-shadow': OFF,

    // react
    // ============
    'react/jsx-filename-extension': OFF,
    // Not needed for Next.js
    'react/react-in-jsx-scope': OFF,
    'react/jsx-one-expression-per-line': OFF,

    // jsx
    // ============
    'jsx-quotes': [ERROR, 'prefer-single'],

    // jsx-a11y
    // ============
    'jsx-a11y/anchor-is-valid': OFF,

    // import
    // ============
    'import/no-named-as-default': OFF,
    'import/no-named-as-default-member': OFF,
  },

  globals: {
    'window': true,
  },
};
