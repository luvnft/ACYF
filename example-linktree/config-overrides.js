const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    fallback: {
      ...config.resolve.fallback,
      process: require.resolve("process"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer"),
      crypto: require.resolve("crypto-browserify"),
      assert: require.resolve("assert"),
    },
  };

  config.plugins = [
    ...(config.plugins || []),
    new webpack.ProvidePlugin({
      process: "process",
      Buffer: ["buffer", "Buffer"],
    }),
  ];

  return config;
};
