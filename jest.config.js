// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
	// A map from regular expressions to module names that allow to stub out resources with a single module
	moduleNameMapper: {
		'\\.(css|less|scss|svg)$': 'identity-obj-proxy',
	},
	// The test environment that will be used for testing
	testEnvironment: 'jsdom',
	// The glob patterns Jest uses to detect test files
	testPathIgnorePatterns: ['/node_modules/', '/templates/'],
	testMatch: [
		'**/__tests__/!(data)/*.+(ts|tsx|js)',
		'**/?(*.)+(spec|test).+(ts|tsx|js)',
	],
	// A map from regular expressions to paths to transformers
	transform: {
		'^.+\\.(js|ts|tsx)$': '<rootDir>/configs/babel-jest-transformer.js',
		// "\\.svg$":
	},
	collectCoverageFrom: [
		'**/*.{ts,tsx}',
		'!**/*.{stories,story}*',
		'!**/build/**/*',
		'!**/node_modules/**',
	],
};
