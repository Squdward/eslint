import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
	// Базовые настройки Eslint JS
	eslint.configs.recommended,

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
