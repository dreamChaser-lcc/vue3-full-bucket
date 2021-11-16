# vue

## vite 不支持链式调用运算符 '?.'
- 也可能与浏览器版本相关
```js
const proxy = getCurrentInstance().proxy;
console.log(proxy?.$hasPermission()); //会报错
```
