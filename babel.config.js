module.exports = function (api) {
  const isTest = api.env('test');

  if (isTest) {
    return {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
        '@babel/preset-react',
      ],
      plugins: ['nativewind/babel'],
    };
  }

  return {
    presets: [
      ['module:react-native-builder-bob/babel-preset', { modules: 'commonjs' }],
    ],
    plugins: ['react-native-reanimated/plugin', 'nativewind/babel'],
  };
};
