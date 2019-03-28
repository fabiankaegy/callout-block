const webpack = require("webpack");
const defaultConfig = require("./node_modules/@wordpress/scripts/config/webpack.config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const editBlocksCSSPlugin = new ExtractTextPlugin({
  filename: "./editor.css"
});

const blocksCSSPlugin = new ExtractTextPlugin({
  filename: "./style.css"
});

const extractConfig = {
  fallback: "style-loader",
  use: ["css-loader", "sass-loader"]
};

module.exports = {
  ...defaultConfig,
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /style\.scss$/,
        use: blocksCSSPlugin.extract(extractConfig)
      },
      {
        test: /editor\.scss$/,
        use: editBlocksCSSPlugin.extract(extractConfig)
      }
    ]
  },
  plugins: [...defaultConfig.plugins, blocksCSSPlugin, editBlocksCSSPlugin]
};
