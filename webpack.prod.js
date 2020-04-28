/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Ultraflix',
			favicon: './public/favicon.ico',
			showErrors: false,
			templateContent: ({ htmlWebpackPlugin }) => `
				<html>
					<head>
						<title>${htmlWebpackPlugin.options.title}</title>
						${htmlWebpackPlugin.tags.headTags}
						<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
					</head>
					<body>
						<div id="root"></div>
					</body>
				</html>
			`,
		}),
	],
});
