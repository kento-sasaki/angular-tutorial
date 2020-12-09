module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@angular-eslint/template'],
  extends: [
    'plugin:@angular-eslint/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/standard',
    'plugin:prettier/recommended', // prettierの設定は一番下に
  ],
  global: {
    module: 'readonly',
  },
  rules: {
    '@angular-eslint/directive-selector': [
      'error',
      { type: 'attribute', prefix: 'app', style: 'camelCase' },
    ],
    '@angular-eslint/component-selector': [
      'error',
      { type: 'element', prefix: 'app', style: 'kebab-case' },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: ['*/tsconfig.json', './tsconfig.**.json'], // 追加
      },
      plugins: ['@angular-eslint/template'],
      processor: '@angular-eslint/template/extract-inline-html',
    },
  ],
};
