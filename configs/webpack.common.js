/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = path.join(__dirname, '../src');
const SLICK_PATH = path.join(
	__dirname,
	'../node_modules/slick-carousel/slick/'
);

module.exports = {
	entry: {
		app: './src/index.tsx',
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'ultraflix.[name].bundle.js',
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Ultraflix',
			favicon: './public/favicon.ico',
			showErrors: false,
			template: './public/index.ejs',
			meta: {
				viewport: 'width=device-width, initial-scale=1.0',
				robots: 'noindex,nofollow',
			},
		}),
	],

	resolve: {
		extensions: [
			'.ts',
			'.tsx',
			'.js',
			'.jsx',
			'.css',
			'.scss',
			'.eot',
			'.ttf',
			'.woff',
		],
	},

	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				include: [SRC_PATH],
				exclude: [/\.stories\.ts(x?)$/, /\.story\.ts(x?)$/, /\.test\.ts(x?)$/],
				use: [
					{
						loader: 'ts-loader',
					},
				],
			},
			{
				test: /\.(s?)css$/,
				include: [SRC_PATH],
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(svg|png|jpe?g|gif)$/,
				include: [SLICK_PATH],
				use: [
					{
						loader: 'url-loader',
					},
				],
			},
			{
				test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
				include: [SLICK_PATH],
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/',
						},
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

	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
	},
};
