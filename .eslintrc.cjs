// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    // basic
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // vue
    /*
    多词组件名
    规则：[vue/multi-word-component-names](https://eslint.vuejs.org/rules/multi-word-component-names.html})
    理由：
    0. 如果 Vue.js 在编译组件时，不进行单词组件名的大小写转化，即：<Component /> != <component />，那么可能引发的冲突将迎刃而解。
    1. 普通组件名与内置组件名或原生标签名的冲突：普通组件名遵守大写首字母即可避免。
    2. 路由组件名可以保持小写也不会引发上述冲突，因为路由组件不会出现在 template 中。
    */
    'vue/multi-word-component-names': 'off',

    /*
    模板局部同名变量
    规则：[vue/no-template-shadow](https://eslint.vuejs.org/rules/no-template-shadow.html)
    理由：
    1. 如果此规则是出于语法考虑（模板中不完全支持局部作用域），那么应当尽快完善该语法编译器；
      如果是出于阅读考虑，那完全没必要，这种重复且通用的变量名就是为了避免不必要的具象。
    2. 命名的成本很高
    */
    'vue/no-template-shadow': 'off',

    // typescript
    '@typescript-eslint/no-unused-vars': 'error',
  },
  overrides: [
    {
      files: ['*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
})
