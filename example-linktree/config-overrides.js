const webpack = require("webpack");

module.exports = function override(config) {
  // Proper way to polyfill Node.js core modules in Webpack 5
  config.resolve = {
    ...config.resolve,
    fallback: {
      ...config.resolve.fallback,
      process: require.resolve("process/browser"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer"),
      crypto: require.resolve("crypto-browserify"),
    },
  };

  // Provide global variables like `process` and `Buffer`
  config.plugins = [
    ...(config.plugins || []),
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ];

  // Optional: clean up source map warnings
  config.module.rules.push({
    test: /\.js$/,
    enforce: "pre",
    use: ["source-map-loader"],
    exclude: [
      /node_modules\/mapmoize/,
      /node_modules\/nist-weierstrauss/,
    ],
  });

  return config;
};
