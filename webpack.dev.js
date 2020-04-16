/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
	},
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
					</head>
					<body>
						<script>
							console.warn("This is a development build!!");
						</script>
						<div id="root"></div>
					</body>
				</html>
			`,
		}),
	],
});
