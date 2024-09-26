import js from '@eslint/js'
import globals from 'globals'

import eslintReact from 'eslint-plugin-react'
import eslintReactHooks from 'eslint-plugin-react-hooks'
import eslintReactRefresh from 'eslint-plugin-react-refresh'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['./dist', './.git', './node_modules', '*.config.js'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
  },
  {
    languageOptions: {
      ecmaVersion: 2024,
      globals: globals.browser,
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.app.json', 'tsconfig.node.json'],
      },
    },
  },
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
      react: eslintReact,
      prettier: eslintPluginPrettier,
    },
  },
  {
    rules: {
      ...eslintPluginPrettier.configs.recommended.rules,
      ...eslintReactHooks.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'prefer-const': 'error',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
)
