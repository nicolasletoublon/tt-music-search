const path = require('path');

module.exports = {
	devtool: 'source-map',
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		loaders: [
			{
				test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
			},
			{
				test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 3000
	}
};