const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return {
            mode,
            entry: "/src/index.js",
            output: {
                publicPath: "/",
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
                    test: /\.jpe?g|png$/,
                    exclude: /node_modules/,
                    use: ["url-loader", "file-loader"]
                },
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
                    },
                    {
                      test: /\.svg$/,
                      use: ['@svgr/webpack'],
                    },
                    {
                      test: /\.(png|jp(e*)g|svg|gif)$/,
                      use: ['file-loader'],
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
            ]
        }
};