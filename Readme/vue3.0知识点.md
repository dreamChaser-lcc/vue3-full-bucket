# 概述

vue、vue3.x 学习笔记

## 挂载全局方法

- 挂载在 app.config.globalProperties 上
- 通过 app.use 注册

```js
const app = create(App);
const method = () => {
  //挂载的方法
};
app.use({
  install: () => {
    app.config.globalProperties.$method = method;
  },
});
```

使用全局方法

- 通过 proxy 获取

```js
 setup: () => {
    const proxy = getCurrentInstance()!.proxy;
    console.log( proxy?.$hasPermission(1, 2));
  },
```

## <keep-alive>缓存组件

- 不会生成 dom 元素
- 生命周期 activated 和 deactivated,分别在被展示和被隐藏时触发
- props(属性)：include,exclude,max;
  include:string|regExp|Array<string> //匹配的是组件名称
  exclude:string|regExp|Array<string>
  max:number

## v-slot 插槽

父组件

```html
<template>
  <sub-page>
    <template v-slot:default="props">
      <div>子组件的属性{{props}}<div>  //=> 打印：子组件的属性{prop1:'属性1',prop2:'属性2'}
    </template>
    <template v-slot:ohter>
        不获取子组件属性
    </template>
  </sub-page>
</template>
```

子组件

```html
<template>
  <slot name="default" prop1="属性1" prop2="属性2"> </slot>
  <slot name="other"> </slot>
</template>
```

综上：<slot>标签把父组件的元素搬到自身，并可用自身作用域的 prop 属性
