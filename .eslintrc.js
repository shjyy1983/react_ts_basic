module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    // 开启 react hooks 检查
    'airbnb/hooks',
    'plugin:react/recommended',
    // 用于 lint eslint 指令注释，例如检测出无用的 eslint-disable 注释
    'plugin:eslint-comments/recommended',
    // 开启它推荐的一些 rules
    'plugin:@typescript-eslint/recommended',
    // 提供了循环依赖检测，文件名大小写风格约束等非常实用的规则集合
    'plugin:unicorn/recommended',
    // 按照最佳实践 lint 你的 promise 代码
    'plugin:promise/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'unicorn', 'promise'],
  // 让 eslint-plugin-import 能够正确解析 ts, tsx, json 后缀名, 指定允许的后缀名.
  settings: {
    'import/resolver': {
      node: {
        // 指定 eslint-plugin-import 解析的后缀名
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
      typescript: {
        // 为了让 eslint-plugin-import 能够正确解析 tsconfig.json 中的 paths 映射
        // 配置 eslint-import-resolver-typescript 读取 tsconfig.json 的路径
        // 目前用不着，先注释掉
        // directory: [resolve('./src/tsconfig.json'), resolve('./scripts/tsconfig.json')],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    'no-debugger': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
};
