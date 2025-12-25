import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  // ─────────────────────────────
  // Игнорируем сборку
  globalIgnores(['dist']),

  // ─────────────────────────────
  // Основной конфиг
  {
    files: ['**/*.{ts,tsx}'],

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },

    rules: {
      // ───── React 19 ─────
      // React 17+ / 18 / 19 — react в scope не нужен
      'react/react-in-jsx-scope': 'off',

      // ───── Кавычки ─────
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],

      // ───── Точка с запятой ─────
      semi: ['error', 'always'],

      // ───── Hooks ─────
      ...reactHooks.configs.flat.recommended.rules,
    },
  },

  // ─────────────────────────────
  // Prettier (ПОСЛЕДНИМ!)
  eslintPluginPrettier,
]);
