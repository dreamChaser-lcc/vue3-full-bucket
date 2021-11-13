# vue

vite 不支持链式调用运算符 ?.

```js
  const proxy = getCurrentInstance().proxy;
  console.log( proxy?.$hasPermission());//会报错
```
