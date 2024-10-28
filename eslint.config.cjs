// module.exports = {
//   // root: true,
//   extends: '@react-native',
//   rules: {
//     '@typescript-eslint/no-unused-vars': [
//       'error',
//       { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
//     ],
//      "@typescript-eslint/no-unused-vars": "off"
//   },
// };

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    // other rules...
  },
};