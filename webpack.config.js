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
            rules: [{
                test: /\.ts$/,
                loader: 'ts-loader'
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?minimize=true!less-loader' })
            }, {
                test: /\.(jade|pug)$/,
                loader: 'pug-loader'
            }, {
                test: /\.(jpe?g|gif|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: ['base64-image-loader', {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                        },
                        optipng: {
                            enabled: false,
                        },
                        pngquant: {
                            quality: '65-90',
                            speed: 4
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        webp: {
                            quality: 75
                        }
                    }
                }]
            }]
        },

        output: {
            path: __dirname + '/output',
            publicPath: '/output/',
            filename: '[name].js',
        },

        plugins: plugins,

        watch: true
    };
};
