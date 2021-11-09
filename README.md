# 概述

- vite+vue3.0+antd+vuex+router+ts 全家桶探索学习

# 项目搭建

```
  // vite初始化
  npm init @vitejs/app my-vue-app --template vue-ts
```
## 代码格式化工具 prettier
具体选项查看官网
https://prettier.io/docs/en/options.html

```
  npm install --save-dev --save-exact prettier
```
安装后根目录添加配置文件 .prettierrc.js
添加忽略格式化的配置文件 .prettierignore
添加配置
```
 module.exports={
  trailingComma: "es5", // 尾随逗号
  tabWidth: 2, // tab两个空格
  semi: true,  // 末尾加分号
  singleQuote: false, 
  bracketSpacing:true,
  bracketSameLine:true, 
}
```