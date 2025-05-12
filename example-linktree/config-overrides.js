const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    fallback: {
      ...config.resolve.fallback,
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer"),
      crypto: require.resolve("crypto-browserify"),
      assert: require.resolve("assert"),
    },
    alias: {
      ...config.resolve.alias,
      process: require.resolve("process/browser.js"), // ADD `.js`
    },
  };

  config.plugins = [
    ...(config.plugins || []),
    new webpack.ProvidePlugin({
      process: "process/browser.js", // ADD `.js`
      Buffer: ["buffer", "Buffer"],
    }),
  ];

  return config;
};
