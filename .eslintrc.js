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
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  rules: {
    quotes: ["warn", "double"],
    "promise/prefer-await-to-then": "warn",
    "react/function-component-definition": "off",
  },
};
