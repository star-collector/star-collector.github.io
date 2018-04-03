const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env={ type: 'dev'}) => {
    let plugins = [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            template: 'src/index.pug',
            filename: "../index.html"
        })
    ];

    return {
        entry: {
            app: __dirname + '/src/index.ts'
        },

        resolve: {
            extensions: ['*', '.ts', '.js', '.less']
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'ts-loader'
                },
                {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?minimize=true!less-loader' })
                },
                {
                    test: /\.(jade|pug)$/,
                    loader: 'pug-loader'
                }
            ]
        },

        output: {
            path: __dirname + '/output',
            publicPath: '/output/',
            filename: '[name].js',
        },

        plugins: plugins,

        watch: env.type == 'dev'
    };
};
