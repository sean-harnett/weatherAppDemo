const path = require('path');

const HtmlWebpack = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        css: ['./src/css/icons/weather-icons-wind.min.css', './src/css/icons/weather-icons.min.css', './src/css/weatherAppStyles.css'],
    },

    plugins: [
        new HtmlWebpack({ title: 'Weather App', template: './src/index.html' })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use:
                [
                    'style-loader',
                    'css-loader',
                ],

        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },

        ]
    }
};