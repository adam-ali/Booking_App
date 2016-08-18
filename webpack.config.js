var path = require('path');
module.exports = {
    context: __dirname,
    entry: './client/app.jsx',
    output: {
        path: path.join(__dirname, '/public'),
        publicPath: '/public/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: false
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                test: /.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    }
};