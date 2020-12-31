module.exports = {
    module:{
        // regras
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                // Verificar os arquivos que terminam em .js
                test: /\.js$/,
                // Remover a node_modules
                exclude: /node_modules/,
                use:{
                    // Utilizar o babel loader
                    loader: 'babel-loader',
                    options:{
                        "presets": [
                            ["@babel/preset-react", {
                              "runtime": "automatic"
                            }]
                          ]
                    }
                }
            }
        ]
    }
}