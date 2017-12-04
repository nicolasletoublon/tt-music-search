var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
	entry: APP_DIR,
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx','.json']
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
	}
};

module.exports = config;