/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.tsx',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'ultraflix.[name].bundle.js',
	},
	plugins: [new CleanWebpackPlugin()],

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},

	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
					},
				],
			},
			{
				test: /\.s?css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(svg|png|jpe?g|gif)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'url-loader',
					},
				],
			},
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
			},
		],
	},

	// externals: {
	// 	'react': 'React',
	// 	'react-dom': 'ReactDOM',
	// },
};
