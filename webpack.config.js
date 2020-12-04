const path = require('path');
const webpack = require('webpack');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {

    mode: "development",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath:"/dist/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            // BABEL
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {presets: ["@babel/env"]}
            },

            // CSS in the header
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    devServer: {
        contentBase: path.join(__dirname, "dist/"),
        port:3000,
        publicPath:"http://localhost:3000/dist",
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}