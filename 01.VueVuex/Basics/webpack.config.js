const path = require('path');
const VueLoaderPlugins = require('vue-loader/lib/plugin')

module.exports = {
    mode:'development',
    devtool:'eval',
    resolve:{
        extensions:['.js' , '.vue' , '.scss' , '.css'],
        alias:{
            Style:path.resolve('./src/assets/scss/'),
            Components:path.resolve('./src/components/'),
            Store:path.resolve('./src/store/'),
            Images:path.resolve('./src/assets/images/'),
        }
    },
    entry:{
        app:'./main.js'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader' , 'css-loader']
            },
            {
                test:/\.scss$/,
                use:['style-loader' , 'css-loader' , 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[contenthash].[ext]',
                            outputPath: 'static/img',
                            esModule: false
                        }
                    }
                ],
            }
        ]
    },
    plugins:[
        new VueLoaderPlugins()
    ],
    output:{
        filename:'app.js',
        path:path.join(__dirname , 'dist'),
        publicPath:'/dist'
    },
    devServer:{
        devMiddleware:{ publicPath : '/dist' },
        static:{ directory : path.resolve(__dirname) },
        hot:true
    }
}