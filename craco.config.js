const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: (config) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        process: require.resolve("process/browser"),
        stream: require.resolve("stream-browserify"),
        buffer: require.resolve("buffer"),
        crypto: require.resolve("crypto-browserify")
      };

      config.plugins.push(
        new webpack.ProvidePlugin({
          process: "process/browser",
          Buffer: ["buffer", "Buffer"]
        })
      );

      return config;
    }
  }
}