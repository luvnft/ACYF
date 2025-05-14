const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve("dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|jpe?g)$/,
        type: "asset/resource" // Replaces url-loader in Webpack 5
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      "process": require.resolve("process/browser"),
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/"),
      "buffer": require.resolve("buffer/"),
      "crypto": require.resolve("crypto-browserify"),
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "zlib": require.resolve("browserify-zlib"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "assert": require.resolve("assert/"),
      "url": require.resolve("url/"),
      "fs": false // Disable fs as it's not available in browser
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ],
  externals: {
    react: "commonjs react",
  }
};