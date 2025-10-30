import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
    ],
    plugins: { react },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.es2024,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: '19.1.16',
      },
      propWrapperFunctions: [{ property: 'exact', exact: true }],
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never' },
      ], // Запрет использования лишних фигурных скобок, т.е. в ситуациях, где без них можно обойтись
      'react/jsx-max-depth': ['error', { max: 3 }], // Максимальный уровень вложенности в компонентах React
      'react/forbid-component-props': 'off', // Запрет на передачу нативных пропсов dom
      'react/function-component-definition': 'off', // Использование только function для объявления компонентов(разницы нет, за исключением порядка объявления)
      'react/jsx-one-expression-per-line': 'off', // Запрет написания jsx в одну строчку
      'react/jsx-indent': 'off', // Количество отступов - prettier при коммите в автоматическом режиме обработает файлы
      'react/jsx-indent-props': 'off', // Количество отступов в описании пропсов - prettier при коммите в автоматическом режиме обработает файлы
      'react/jsx-no-literals': 'off', // Запрет использования строковых литералов JSX
      'react/no-adjacent-inline-elements': 'off', // Пробел между идентичными элементами DOM(компонентами) - prettier при коммите в автоматическом режиме обработает файлы
      'react/no-set-state': 'off', // Запрет использования локального состояния
      'react/jsx-closing-bracket-location': 'off', // Запрет неправильного положения закрывающей скобочки - prettier при коммите в автоматическом режиме обработает файлы
      'react/jsx-closing-tag-location': 'off', // Запрет неправильного положения закрывающего тега - prettier при коммите в автоматическом режиме обработает файлы
      'react/jsx-curly-newline': 'off', // Запрет неправильного расположения фигурных скобочек - prettier при коммите в автоматическом режиме обработает файлы
      'react/jsx-equals-spacing': 'off', // Запрет пробелов между знаком равенства и выражением - prettier при коммите в автоматическом режиме обработает файлы
      'react/jsx-first-prop-new-line': 'off', // Запрет отсутствия переноса на новую строку при описании props - prettier при коммите в автоматическом режиме обработает файлы
      'react/jsx-max-props-per-line': 'off', // Запрет на перечисление props в одной строке - prettier при коммите в автоматическом режиме обработает файлы
      'react/jsx-newline': 'off', // Запрет на отсутствие пробелов между строками в возвращаемом jsx - prettier при коммите в автоматическом режиме обработает файлы
      'react/jsx-props-no-multi-spaces': 'off', // Запрет на множественные пробелы при описании props - prettier при коммите в автоматическом режиме обработает файлы
      'react/jsx-props-no-spreading': 'off', // Запрет на использование spread оператора при передаче props
      'react/jsx-tag-spacing': 'off', // Запрет на отсутствие пробелов до/перед тегом компонента - prettier при коммите в автоматическом режиме обработает файлы,
      'react/jsx-wrap-multilines': 'off', // Запрет отсутствия крублых скобок в JSX
      'react/jsx-child-element-spacing': 'off', // Запрет на отсутствие пробелов в фигурных скобках
      'react/prop-types': 'off',
      'no-unused-vars': ['error', { varsIgnorePattern: '^_.*' }],
    },
  },
]);
