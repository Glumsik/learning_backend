const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const defaultConfig = {
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/views/images",
          to: path.resolve(__dirname, `./public/images/`),
        },
      ],
    }),
  ],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};

const configs = ["main", "allBooks", "viewBook"].map((viewName) => {
  return {
    entry: {
      index: `./src/views/${viewName}/assets/index.js`,
    },
    mode: "production",
    output: {
      path: path.resolve(__dirname, `./public/${viewName}/`),
      filename: "[name].js",
    },
    ...defaultConfig,
  };
});

module.exports = configs;
