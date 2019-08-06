var path = require('path')
var HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module:{
        rules:[
            {
                test: /\.js?$/,
                exclude: /node_module/,
                use:'babel-loader'
            },
            {
                test: /\.css?$/,
                use:['style-loader','babel-loader']
            },
            {
                test: /\.png|j?g?$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname,'public/index.html'),
            filename: 'index.html'
        })
    ]
}