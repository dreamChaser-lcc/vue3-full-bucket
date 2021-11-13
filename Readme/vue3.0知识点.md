# 挂载全局方法
- 挂载在app.config.globalProperties上
- 通过app.use注册
```js

 const app = create(App);
 const method = ()=>{
   //挂载的方法
 }
 app.use({
   install:()=>{
     app.config.globalProperties.$method = method
   }
 })

```
使用全局方法
- 通过proxy获取
```js
 setup: () => {
    const proxy = getCurrentInstance()!.proxy;
    console.log( proxy?.$hasPermission(1, 2));
  },
```

