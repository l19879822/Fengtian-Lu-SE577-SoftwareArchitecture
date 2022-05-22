module.exports = {
  module: {
    rules: [
      {
        test: /\.ya?ml$/,
        use: 'yaml-loader',
      },
    ],
  },
  resolve: {
    fallback: {
      util: require.resolve('util/'),
    },
  },
};
