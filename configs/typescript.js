import tseslint from "typescript-eslint";

export default tseslint.config(
  // Рекомендуемые настройки TS
  ...tseslint.configs.recommended,

  {
    languageOptions: {
      parserOptions: {
        project: true, 
        tsconfigRootDir: import.meta.dirname, 
      },
    },
  },

  {
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