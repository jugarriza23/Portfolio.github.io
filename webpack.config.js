const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');


module.exports = {
    mode: 'development',
    entry: './src/scss/styles.scss',
    output: { // sirve para limpiar 
        clean: true,
        path: path.resolve(__dirname, 'docs'),


    },

    module: {
        rules: [{
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /.(css|sass|scss)$/,
                use: ['style-loader', 'css-loader', "sass-loader"],
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                type: "asset",
                test: /\.(png|svg|jpg|jpeg|webp|gif)$/i,

            },
        ],
    },


    optimization: {},

    plugins: [
        new HtmlWebpack({
            title: 'Mi Webpack App',
            // filename: 'index.html'
            template: './src/index.html'
        }),

        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/' },
                { from: 'src/js/', to: 'js/' },
                { from: 'src/scss/', to: 'css/' }

            ]
        })
    ]
}