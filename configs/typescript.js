import tseslint from "typescript-eslint";

export default tseslint.config(
  // Рекомендуемые настройки TS
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.*.json"],
        tsconfigRootDir: process.cwd(),
      },
    },
    rules: {
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",

      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",

      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/prefer-readonly": "warn",
    },
  }
);
