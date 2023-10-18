const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

// TODO: Add and configure workbox plugins for a service worker and manifest file. ****DONE?***

// TODO: Add CSS loaders and babel to webpack. ***DONE?***

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        title: "Progressive Web Application",
      }),
      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "sw.js",
      }),
      new WebpackPwaManifest({
        name: "Progressive Web Application",
        short_name: "PWA",
        description: "A simple PWA application",
        background_color: "#ffffff",
        crossorigin: "use-credentials",
        icons: [
          {
            src: path.resolve("src/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons"),
          },
        ],
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      ],
    },
  };
};
