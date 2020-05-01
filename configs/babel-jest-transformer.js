module.exports = require('babel-jest').createTransformer({
	babelrc: false,
	presets: [
		[
			'@babel/preset-env',
			{
				modules: 'commonjs',
				targets: {
					node: 'current',
				},
			},
		],
		'@babel/preset-typescript',
		'@babel/preset-react',
	],
});
