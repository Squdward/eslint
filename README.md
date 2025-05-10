# @squdward/eslint

[![npm version](https://img.shields.io/npm/v/@squdward/eslint.svg)](https://www.npmjs.com/package/@squdward/eslint)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Комплексное решение для линтинга JavaScript/TypeScript проектов с готовыми конфигурациями для ESLint, Prettier и Stylelint.

## 📋 Содержание

- [Особенности](#особенности)
- [Установка](#установка)
- [Быстрый старт](#быстрый-старт)
- [Настройка](#настройка)
  - [ESLint](#eslint)
  - [Prettier](#prettier)
  - [Stylelint](#stylelint)
- [Что включено](#что-включено)
- [Расширение конфигурации](#расширение-конфигурации)
- [Лицензия](#лицензия)

## ✨ Особенности

- **Готовые конфигурации** для ESLint, Prettier и Stylelint
- **Поддержка TypeScript** из коробки
- **Правила для React** и React Hooks
- **Автоматическое исправление** для большинства проблем
- **Совместимость** с современными стандартами разработки

## 📦 Установка

### Основной пакет

```bash
npm install --save-dev @squdward/eslint
```

### Необходимые зависимости

```bash
npm install --save-dev eslint prettier stylelint
```

### Опциональные зависимости

Для TypeScript и React проектов (если применимо):

```bash
npm install --save-dev typescript react
```

## 🚀 Быстрый старт

После установки всех необходимых пакетов, вы можете использовать готовые конфигурации в своем проекте.

## ⚙️ Настройка

### ESLint

Создайте файл `eslint.config.js` в корне вашего проекта:

```js
import squdwardConfig from "@squdward/eslint";

export default [...squdwardConfig, 
  // Ваши собственные настройки...
];
```

### Prettier

Создайте файл `.prettierrc.js` в корне вашего проекта:

```js
import squdwardPrettierConfig from '@squdward/eslint/prettier';

export default {
  ...squdwardPrettierConfig,
  
  // Пользовательские переопределения...
  // semi: false,
};
```

### Stylelint

Создайте файл `stylelint.config.js` в корне вашего проекта:

```js
import squdwardStylelintConfig from "@squdward/eslint/stylelint";

export default {
  ...squdwardStylelintConfig,
  
  // Пользовательские настройки...
};
```

## 🔍 Что включено

### Базовые правила (для всех проектов)

- ✅ Современный JavaScript (ES6+)
- ✅ Строгие правила форматирования
- ✅ Автофикс для большинства проблем
- ✅ Проверка стилей кода и форматирования

### Для TypeScript

- ✅ Строгая типизация
- ✅ Запрет использования `any` (с исключениями)
- ✅ Проверка работы с промисами (обязательное использование `await`)
- ✅ Проверка типов и интерфейсов

### Для React

- ✅ Правила использования хуков
- ✅ Валидация пропсов
- ✅ Проверка JSX синтаксиса
- ✅ Лучшие практики React-разработки

### Для CSS/SCSS (Stylelint)

- ✅ Проверка синтаксиса CSS/SCSS
- ✅ Правила для порядка свойств
- ✅ Проверка селекторов
- ✅ Проверка цветов и единиц измерения

## 🛠 Расширение конфигурации

Вы можете расширить базовую конфигурацию, добавив собственные правила:

### ESLint

```js
import squdwardConfig from "@squdward/eslint";

export default [
  ...squdwardConfig,
  {
    rules: {
      // Ваши правила...
      'no-console': 'warn',
    },
  },
];
```

### Prettier

```js
import squdwardPrettierConfig from '@squdward/eslint/prettier';

export default {
  ...squdwardPrettierConfig,
  printWidth: 100,
  // Другие настройки...
};
```

### Stylelint

```js
import squdwardStylelintConfig from "@squdward/eslint/stylelint";

export default {
  ...squdwardStylelintConfig,
  rules: {
    // Ваши правила...
    'color-no-invalid-hex': true,
  },
};
```