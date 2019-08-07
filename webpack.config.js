const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    entry:{
        index:'./src/index.js'
    },
    output:{
        path:__dirname + '/public',
        filename:'./js/[name].js'
    },
    devtool:'eval-source-map',
    devServer:{
        contentBase:'./public',
        inline:true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'./index.html'
        })
    ]
}