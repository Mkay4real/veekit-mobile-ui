module.exports = {
  presets: [
    ['module:react-native-builder-bob/babel-preset', { modules: 'commonjs' }],
    // ['module:react-native-builder-bob/babel-preset', { modules: 'commonjs' }, 'nativewind/babel'],
  ],
  plugins: [
    'react-native-reanimated/plugin',
    "nativewind/babel"
  ],
};
