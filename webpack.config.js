module.exports = {
    entry: "./Box2D/Box2D/Box2D.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest']
                }
            }
        ]
    }
};