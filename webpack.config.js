var path = require('path');
module.exports = {
    context: __dirname,
    entry: './client/app.jsx',
    output: {
        path: path.join(__dirname, './'),
        publicPath: './',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json','.babel', '.node']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: false
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            },
            {
                test: /\.(png|jpg|)$/,
                loader: 'url-loader?limit=200000'
            },

            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.target.mk$/,
                loader: "raw-loader"
            },
            {
                test: /\.node$/,
                loader: "node-loader"
            },
            {
                exclude: /node_modules/,
                test: /.jsx?$/,
                loader: 'babel-loader',
            }
        ]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};