const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return {
            mode,
            entry: "/src/index.js",
            output: {
                publicPath: "/fitness_app/",
                path: path.resolve(__dirname, "build"),
                filename: "bundle.js"
            },
            devServer: {
              open: true
            },
            resolve: {
              extensions: ['.js','.jsx'] 
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
                    },
                    {
                      test: /\.(png|svg|jpg|jpeg|gif)$/i,
                      loader:'file-loader'
                    },
                    {
                      test: /\.css$/i,
                      use: ["style-loader", "css-loader"],
                    },
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html"
                }),
                new CopyWebpackPlugin({
                  patterns: [
                  {from:'./public/fitness_app/assets/icons', to: "../build/assets/icons"},
                  {from:'./public/fitness_app/assets/images', to: "../build/assets/images"}
                  ]
                })
            ]
        }
};