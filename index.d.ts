import type { FlatConfig } from "eslint";
import type { Config as PrettierConfig } from "prettier";
import type { Config as StylelintConfig } from "stylelint";

// Определение типа для основной конфигурации
declare const mainConfig: FlatConfig.ConfigArray;

// Экспорт отдельных конфигураций
export const reactConfig: FlatConfig.ConfigArray;
export const typescriptConfig: FlatConfig.ConfigArray;
export const prettierConfig: PrettierConfig;
export const stylelintConfig: StylelintConfig;

// Дефолтный экспорт
export default mainConfig;

// Декларации для отдельных подпутей
declare module "@squdward/eslint/prettier" {
  const config: PrettierConfig;
  export default config;
}

declare module "@squdward/eslint/stylelint" {
  const config: StylelintConfig;
  export default config;
}

declare module "@squdward/eslint/configs/react" {
  const config: FlatConfig.ConfigArray;
  export default config;
}

declare module "@squdward/eslint/configs/typescript" {
  const config: FlatConfig.ConfigArray;
  export default config;
}

declare module "@squdward/eslint/configs/main" {
  const config: FlatConfig.ConfigArray;
  export default config;
}
