module.exports = {
    // other webpack configuration
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.glsl$/,
                use: 'raw-loader',
            },
        ],
    },
}

// {
// 	test: /\.(js|jsx)$/,
// 	exclude: /node_modules\/@react-three\/drei\/node_modules\/@mediapipe\/tasks-vision/,
// 	use: ['source-map-loader'],
// 	enforce: 'pre'
// }
