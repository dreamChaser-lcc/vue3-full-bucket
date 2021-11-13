# 概述

- vite+vue3.0+antd+vuex+router+ts 全家桶探索学习
# 工程化准备
## 项目搭建

```none
  // vite初始化
  npm init @vitejs/app my-vue-app --template vue-ts
```

## 代码格式化工具 prettier

具体选项查看官网
<https://prettier.io/docs/en/options.html>

```CLI
  npm install --save-dev --save-exact prettier
```

安装后根目录添加配置文件 .prettierrc.js
添加忽略格式化的配置文件 .prettierignore
添加配置

```js
module.exports = {
  trailingComma: "es5", // 尾随逗号
  tabWidth: 2, // tab两个空格
  semi: true, // 末尾加分号
  singleQuote: false,
  bracketSpacing: true,
  bracketSameLine: true,
};
```

## eslint 代码格式检测

- npm install eslint --save-dev // dev 安装
- ./node_modules/.bin/eslint --init // 执行命令生成配置文件
- ./node_modules/.bin/eslint ./src/App.vue // 检测 App.vue 文件
- 或全局安装 npm install eslint --global // 全局安装可以使用 eslint 命令
- eslint ./src/App.vue

## git hooks 提交时处理 eslint 处理代码

```none

  // 处理githook的插件
  npm  i husky -D
  // 提交前相应格式的文件执行命令插件 lint-staged
  npm  i lint-staged -D

```
![image](https://user-images.githubusercontent.com/73150571/141251991-0c52f485-e33f-4dd3-9888-57e47ffd5031.png)

```json
// package.json
{
  "husky": {
    "hooks": {
      // 当触发git commit 时触发的hooks
      "pre-commit": "lint-staged"
    }
  },
  // commit 触发执行的命令
  "lint-staged": {
    "*.{vue,ts}": [
      "npm run lint", // 执行脚本
      "prettier --write",
      "git add"
    ]
  }
}
```
## 全局引入ant-design-vue插件
必须加上@next要不然不是最新版本会报错
必须2.x版本，2.x版本才支持vue3
```
  npm i ant-design-vue@next -S
```
- 可以app引入，app.use()方式引入
- 也可以使用插件引入如下
https://www.npmjs.com/package/vite-plugin-style-import