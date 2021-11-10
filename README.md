# 概述

- vite+vue3.0+antd+vuex+router+ts 全家桶探索学习

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
 module.exports={
  trailingComma: "es5", // 尾随逗号
  tabWidth: 2, // tab两个空格
  semi: true,  // 末尾加分号
  singleQuote: false, 
  bracketSpacing:true,
  bracketSameLine:true, 
}
```

## eslint 代码格式检测

- npm install eslint --save-dev   // dev安装
- ./node_modules/.bin/eslint --init // 执行命令生成配置文件
- ./node_modules/.bin/eslint ./src/App.vue  // 检测App.vue文件
- 或全局安装npm install eslint --global // 全局安装可以使用eslint命令
- eslint ./src/App.vue  

## git hooks提交时处理eslint处理代码

```none

  // 处理githook的插件
  npm  i husky -D
  // 提交前相应格式的文件执行命令插件 lint-staged
  npm  i lint-staged -D

```

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
      },
  }

```