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

## keep-alive 缓存组件

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

## ref 和 reactive 响应式区别

共同点:都可以定义响应式变量
| | ref | reactive |
| -------- | ----------------------------------------------------------------- | ---------------------------- |
| 定义类型 | 基础数据类型和引用类型<br>`但一般用于定义基本类型` | `只能`定义引用类型(对象 | 数组) |
| 返回对象 | 返回` RefImpl 类型的对象`，<br> 译为引用的实现(reference implement) | 返回是 `Proxy 对象` |
| 读取变量 | console.log(ref.value) | console.log(reactive.属性名) |

## 组件通信

| 通信类型          | 方法                                                 |
| ----------------- | ---------------------------------------------------- |
| 父子互值          | `props/ref` 方式,<br>`props/emits` 方式(v-model/emits) |
| 父子互传,子孙互传 | provide/inject                                       |
| 全局共享          | vuex                                                 |

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

### provide/inject 方式

- 共享一个相对父组件内的全局的状态
- 子组件或孙子组件共享和更改父组件的状态
- 一般不推荐子组件直接修改，而是调用父组件的方法，在父组件修改

```ts
setup() {
    const appContext: AppContext = getCurrentInstance()!.appContext;
    const app = appContext.app;
    // 父组件
    app.component("SuperFirst", {
      template: `
        <div>父组件{{superNumber}}</div>
        <div>混合数据reactive{{mixedObj}}</div>
        <button @click="changeOrigin">change</button>
        <child-first></child-first>
      `,
      setup() {
        const superNumber = ref<number>(0);
        // 复杂结构数据，对象或者数组
        const mixedObj = reactive<any>({ name: "lcc", meta: { metaname: 1 } });

        // readonly 保证子组件inject不能直接修改
        provide("superNumber", readonly(superNumber));

        provide("mixedObj", mixedObj);
        // 父组件直接更改
        const changeOrigin = () => {
          superNumber.value = 1;
          mixedObj.meta = { ...mixedObj.meta, otherMeta: 2 };
        };
        // 子组件调用父组件方法更改
        const modifyOrigin = (params: { number: number; obj: any }) => {
          superNumber.value = params.number;
          mixedObj.meta = params.obj;
        };
        // 提供给子组件修改方法
        provide("modifyOrigin", modifyOrigin);
        return { superNumber, mixedObj, changeOrigin };
      },
    });
    app.component("ChildFirst", {
      template: `<div>子组件1{{superNumber}}</div>
        <div>{{mixedObj}}</div>
        <button @click="onChange">改变</button>
        <grandSonFirst/>
      `,
      setup(props, ctx) {
        // 注入修改共享状态的方法
        const modifyOrigin =
          inject<(param: { number: number; obj: any }) => void>("modifyOrigin");

        const superNumber = inject<any>("superNumber");
        const mixedObj = inject<any>("mixedObj");

        const onChange = () => {
          // 不推荐,不推荐直接子组件修改
          // mixedObj.meta = { meta1: 1 }

          // 推荐,调用改共享状态方法
          const number = 666;
          const obj = { meta1: 1 };
          modifyOrigin?.({ number, obj });

          // 不生效 因为子组件中readonly,子组件无法直接修改
          superNumber.value = 55;
        };

        return { superNumber, mixedObj, onChange };
      },
    });
    app.component("grandSonFirst", {
      template: `<div>孙子组件{{superNumber}}</div>
        <div>{{mixedObj}}</div>
        <button @click="onChange">改变</button>
      `,
      setup(props, ctx) {
        const modifyOrigin =
          inject<(param: { number: number; obj: any }) => void>("modifyOrigin");
        const superNumber = inject<any>("superNumber");
        const mixedObj = inject("mixedObj");
        const onChange = () => {
          const number = 666;
          const obj = { meta1: 1 };
          // 获取父组件的方法
          modifyOrigin?.({ number, obj });
          // 不生效 因为子组件中readonly
          superNumber.value = 55;
        };
        return { superNumber, mixedObj, onChange };
      },
    });
  },
```

## props 和 attrs 区别

- props 和 attrs,都是标签上引用的属性
- props 声明了才会出现在 props 中，否则会出现在 attrs 中
- 相当于解构标签属性{props,...attrs},把声明的放到 props,没声明的放到 attrs

```vue
<template>
  <child-component
    name="name"
    style="color:red"
    @change="change"></child-component>
</template>
```

```ts
export default defineComponent({
 props:{
    name:{type:string}
  }
  setup(props,{solts,emits,attrs}){
    // name会在props中，change和style会在attrs中
    console.log({...props},{...attrs})
    return {
      attrs
    }
  }
})
```

## react 和 vue 封装属性对比

下面两个分别是 react 和 vue 封装组件的`区别`，实现内容是一样的

### `react`中封装组件的组件传递管理

```tsx
interface IComponent {
  name: string;
}
const component: FC<IComponent> = (allProps) => {
  // 定义了name,相当于定义props,解构name,其余都放到attrs中
  const { name, ...attrs } = allProps;
  return <div {...attrs}>{name}</div>;
};
```

### `vue`中封装组件的组件传递管理

```vue
<template>
  <div v-bind="attrs">{{ name }}</div>
</template>
```

```ts
export default defineComponent({
  props:{
    name:{type:String}
  }
  setup(props,{attrs}){
    return {
      attrs
    }
  }
})
```
