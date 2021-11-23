# vue

## vite 不支持链式调用运算符 '?.'

- 也可能与浏览器版本相关

```js
const proxy = getCurrentInstance().proxy;
console.log(proxy?.$hasPermission()); //会报错
```

## 自动导入模块

### vue-cli 中，webpack 的 `require.context`

```ts
// 从当前目录下,加载所有ts后缀的文件,false是不加载子目录文件,即useSubdirectories=false
const moduleFiles = require.context(".", false, /\.ts$/);
// 最终模块对象
const modules = {};
// keys(),获取moduleFiles对象中的keys,并变为数组
moduleFiles.keys().forEach((key) => {
  // 除去自身文件
  if (key === "./index.ts") {
    return;
  }
  // moduleFiles(key)获取模块，default是，export default 的对象
  const moduleFile = moduleFiles(key).default;
  // 存入模块对象中
  modules[key.replace(/(\.\/|\.ts)/g, "")] = moduleFile;
});

export default modules;
```

### vite 中的获取模块的方式

import.meta.globEager,如下

```ts
const moduleFiles = import.meta.globEager("./*.ts");// 如果需要加载子目录可以（"./**/*.ts"）
const modules: any = {};

for (const key in moduleFiles) {
  if (Object.prototype.hasOwnProperty.call(files, key)) {
    modules[key.replace(/(\.\/|\.ts)/g, "")] = files[key].default;
  }
}

export default modules;
```
