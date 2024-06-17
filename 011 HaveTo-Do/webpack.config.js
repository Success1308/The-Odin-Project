const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

 module.exports = {
	entry: './src/index.js',
		mode: "development",
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	}, 
	devServer: {
        hot: true,
    },
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Todo',
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css', 
		}),
	], 
	

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
 };