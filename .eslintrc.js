/** @type {import('eslint').Linter.Config} */
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"airbnb",
		"airbnb/hooks",
		"plugin:eslint-comments/recommended",
		"plugin:promise/recommended",
		"plugin:import/recommended",
		"plugin:prettier/recommended",
	],
	plugins: ["simple-import-sort", "prettier"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: "latest",
	},
	rules: {
		quotes: ["warn", "double"],
		"promise/prefer-await-to-then": "warn",
		"react/function-component-definition": "off",

		// Import rules
		"simple-import-sort/imports": [
			"error",
			{
				groups: [
					// External packages:
					["^react", "^@?\\w"],

					// Alias imports
					["^@?\\w"],

					// Side effect imports:
					["^\\u0000"],

					// Parent imports:
					["^\\.\\.(?!/?$)", "^\\.\\./?$"],

					// Other relative imports:
					["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],

					// Style imports:
					["^.+\\.s?css$"],
				],
			},
		],
		"simple-import-sort/exports": "error",
		"import/first": "error",
		"import/newline-after-import": "error",
		"import/no-duplicates": "error",

		"prettier/prettier": [
			"error",
			{
				// endOfLine: "auto",
			},
		],
	},
};
