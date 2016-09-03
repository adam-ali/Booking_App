var path = require('path');
module.exports = {
    context: __dirname,
    entry: './client/app.jsx',
    output: {
        path: path.join(__dirname, './public/'),
        publicPath: './public/',
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
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
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
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
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
                loader: 'babel-loader'
            }
        ]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};