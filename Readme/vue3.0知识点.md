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
    <!-- 匿名作用域插槽 -->
    <template v-slot:default="props">
      <!-- 子组件的属性{prop1:'属性1',prop2:'属性2'}  -->
      <div>子组件的属性{{props}}<div>
    </template>
    <!-- 具名插槽 -->
    <template v-slot:ohter>
        不获取子组件属性
    </template>
  </sub-page>
</template>
```

子组件

```html
<template>
  <!-- 默认的名称是匿名插槽，绑定属性是作用域插槽，所以是匿名作用域插槽 -->
  <slot name="default" prop1="属性1" prop2="属性2"> </slot>
  <!-- 具名插槽 -->
  <slot name="other"> </slot>
  <!-- 具名作用域插槽插槽 -->
  <slot name="other" :props="props"> </slot>
</template>
```

综上：<slot>标签把父组件的元素搬到自身，并可用自身作用域的 prop 属性

## vue2.x v-model VS vue3.x v-model

` vue2.x中使用`

```vue
<ChildComponent v-model="pageTitle" />

<!-- 是以下的简写: -->

<ChildComponent :value="pageTitle" @input="pageTitle = $event" />
或
<ChildComponent :title="pageTitle" @change="pageTitle = $event" />
获取@其他事件
```

` vue3.x中使用`
是@update:prop = "value"

```vue
<ChildComponent v-model:title="pageTitle" />

<!-- 是以下的简写: -->

<ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />
```

## getCurrentInstance()

获取内部组件实例对象，可以获取 this 全局对象，但不能代替 this

```ts
  setup(){
    const internalInstance = getCurrentInstance();
    internalInstance.appContext.config.globalProperties // 访问 globalProperties
    或者
    internalInstance.appContext.app // 相当于访问单例全局对象Vue
  }
```

### 获取全局 app 对象

```ts
  setup(){
    internalInstance.appContext.app; // 相当于访问单例全局对象Vue
  }
```

## 组件通信

| 通信类型 | 父传子 | 子传父 |
| -------- | ------ | ------ |
| 单元格   | 单元格 | 单元格 |
| 单元格   | 单元格 | 单元格 |

### 父子组件通信

#### prop 和 ref 方式

- 父组件通过`prop`向子组件传递值
- 例子对应的 prop 是`superval`
- 子组件传递`ref属性`获取到子组件的方法及变量
- !加载完成之后的周期才能读取到子组件的值
- 例子对应的 ref 属性是`childRef`

tip:子组件`不需要`自发的给 ref 赋值，内部会`自动`将子组件的 props 和 setup 暴露出的属性挂在到 ref 上，如下例子，childRef.value 可获取到`子组件的superval，otherState，childFunc属性`

```ts
/*
 * createApp 创建实例
 * @param App 渲染的App.vue文件
 */
const app = createApp(App);
// 父组件
app.component("SuperFirst", {
  template: `
        <div>父组件的值{{superval}}</div>
        <child-first :superval="superval" ref='childRef'></child-first>
      `,
  setup() {
    const superval = ref<string>("父组件的值");
    // 通过ref获取到子组件的prop及setup返回的变量
    const childRef = ref<any>(null);
    // 加载完成后
    onMounted(() => {
      // 父组件调用子组件的方法
      childRef.value.childFunc();
    });
    return { superval, childRef };
  },
});

// 子组件
app.component("ChildFirst", {
  template: `<div>子组件获取父组件值：{{superval}}</div>`,
  props: {
    superval: {
      type: String,
    },
  },
  setup(props, ctx) {
    const { childRef } = props;
    const otherState = "子组件其他的值";
    // 传递给父组件的方法
    const childFunc = () => {
      console.log("子组件的方法");
    };
    return { childFunc, otherState };
  },
});
```

#### v-model 和 emit 方式

- 父组件通过`prop`向子组件传递值
- 例子对应的 prop 是`superval`
- v-model 相当于:superval + :@update:superval
- 子组件通过`emit`主动去派发给父组件

tip:v-model 只是简写也可以自定义:superval + @事件名:superval,原理相同

```ts
const appContext: AppContext = getCurrentInstance()!.appContext;
const app = appContext.app;
// 父组件
app.component("SuperFirst", {
  template: `
        <div>父组件1{{superval}}</div>
        <child-first v-model:superval="superval"></child-first>
      `,
  setup() {
    const superval = ref<string>("父组件的值");
    return { superval };
  },
});

// 子组件
app.component("ChildFirst", {
  template: `
        <div>子组件1{{parent}}</div>
        <div>{{superval}}</div>
        <button @click="onChange">改变</button>
      `,
  props: {
    superval: {
      type: String,
    },
  },
  // 挂载派发事件名
  emits: ["update:superval"],
  setup(props, ctx) {
    const onChange = () => {
      // 向父组件传值
      ctx.emit("update:superval", "改变");
    };
    return { onChange };
  },
});
```
