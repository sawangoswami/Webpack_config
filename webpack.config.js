
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
module.exports = {
    
    context: __dirname,
    entry: {
        index: './src/index.js',
},
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },

            {
                test: /\.scss/,
                use: ["style-loader", "css-loader","sass-loader"]
            }
        ]
    },


    plugins: [
        new HtmlWebPackPlugin()
    ]
};