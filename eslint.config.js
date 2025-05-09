import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
	// Базовые настройки Eslint JS
	eslint.configs.recommended,

	// Настрйоки для Typescript
	tseslint.configs.recommended,

	// Подключение правил Prettier через плагин
	{
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			"prettier/prettier": "error",
			...prettierConfig.rules,
		},
	},
]);
