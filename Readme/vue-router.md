# 概括

vue-router 4.x 路由学习学习

## router-view 中的 v-slot

```vue
<router-view v-slot="props"></router-view>
```

props 是 VNode 的 Props
包含
Component, route
如下结构出

```
 <router-view v-slot="{Component, route }"></router-view>
```

Conponent:当前路由对应的 conponent
route:当前路由对应的路由，包含 name,patch,meta,query 等路由属性

结构出对应路由组件信息和 route 信息，为了对当前组件做处理，如下

```
<router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'" mode="out-in">  // 利用路由属性做出相应过度效果
        <keep-alive>  // 缓存触发过的路由
          <component
            :is="Component"
            :key="route.meta.usePathKey ? route.path : undefined"
          />
        </keep-alive>
      </transition>
 </router-view>
```

## router 和 route 的区别

- router 是总的路由实例对象
- route 是当前路由对象

## useRoute 和 useRouter 使用

钩子函数，可以代替 this 调用 router 和 route

```ts
  import { useRoute,useRouter } from 'vue-router'
  // vue2.x 获取路由实例和当前路由对象
  this.$route
  this.$router
  // vue3.x 配合setup函数
  setup(){
    const route = useRoute();
    const router = useRouter();

  }
```
