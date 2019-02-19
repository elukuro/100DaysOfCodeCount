var webpack= require('webpack');
var path = require('path');

module.exports={
    entry:[
        path.join(__dirname,'./scripts/index.js')
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },{
                test: /\.scss$/,
                loaders: ["style-loader", "css-loder", "scss-loader","sass-loader"]
            }
        ]
    },
    output:{
        path:__dirname+'/dist',
        filename:'bundle.js'
    },
    devServer:{
        contentBase:__dirname+'/dist',
        historyApiFallback:true
    }
}