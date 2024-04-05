const HtmlWebpackPlugin = require('html-webpack-plugin')
const { Template } = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },    
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node-modules/
            },
        ]    
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Calculator',
            filename: 'index.html',
            Template: 'src/index.html',
            templateContent: `
            <!DOCTYPE html>
            <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Calculator</title>
                    <style>
                    *{
                        margin: 0px;
                        padding: 0px;
                        border: 0px;
                    }
                    
                    body{
                        width: 99%;
                        height: 98%;
                        position: absolute;
                    
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    main{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        
                        flex-direction: column;
                    }
                    
                    .output{
                        width: 100%;
                        max-width: 100%;
                        height: 35px;
                        display: flex;
                    
                        margin-bottom: 15px;
                        border: 1px solid black;
                    
                        align-items: center;
                        justify-content: center;
                        
                        overflow-x: hidden;
                    
                        font-size: 24px;
                    }
                    
                    .number{
                        width: 35px;
                        height: 35px;
                    
                        font-size: 16px;
                    }
                    
                    .number:hover{
                        background-color: #666666;
                    }
                    
                    .operator{
                        width: 35px;
                        height: 35px;
                    
                        font-size: 16px;
                    
                        background-color: #3e973b;
                    }
                    
                    .operator:hover{
                        background-color: #6ba369
                    }
                    
                    .result{
                        width: 35px;
                        height: 35px;
                        background-color: #3b7d97;
                    
                        font-size: 16px;
                    }
                    
                    .result:hover{
                        background-color: #678992;
                    }
                    </style>
                </head>
                <body>
                    <div id="body">
                        <main id="main">
                            <div class = "output"></div>

                        </main>
                    </div>
                </body>
            </html>
          `,
        })
    ]
}
