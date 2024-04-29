/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended",
    "stylelint-config-recess-order",
  ],
  plugins: ["stylelint-order", "stylelint-scss"],
};
