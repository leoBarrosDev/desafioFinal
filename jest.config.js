module.exports = {

	testEnvironment: 'node',
	collectCoverageFrom: [
		'src/**/*.js',
		'!node_modules/**',
	],

	coverageThreshold: {
		global: {
			statements: 50,
			branches: 50,
			functions: 50,
			lines: 50,
		},
	},
};

