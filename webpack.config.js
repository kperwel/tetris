const path = require("path");
const DEBUG = process.env.NODE_ENV !== "production";

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  entry: {
    index: ["./src/entry.js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  plugins: [new BundleAnalyzerPlugin()],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: "file-loader",
          options: {
            name: "index.html"
          }
        }
      },
      {
        test: /\.jpe?g$|\.svg$|\.png$|\.txt$/,
        use: {
          loader: "file-loader"
        }
      },
      {
        test: /\.(shader|vert|frag|geom)$/i,
        use: "raw-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 8080
  }
};
