<template>
  <div>3123</div>
  <SuperFirst></SuperFirst>
</template>
<script lang="ts">
import { IStore } from "@/store/types";
import { ALL } from "dns";
import {
  AppContext,
  defineComponent,
  getCurrentInstance,
  ref,
  defineExpose,
  onMounted,
  provide,
  reactive,
  readonly,
  inject,
  computed,
} from "vue";
import { useStore } from "vuex";
const transferValue = defineComponent({
  setup() {
    const appContext: AppContext = getCurrentInstance()!.appContext;
    const app = appContext.app;
    app.component("SuperFirst", {
      template: `
          <div>父组件1{{superNumber}}</div>
          <div>混合数据reactive{{mixedObj}}</div>
          <button @click="changeOrigin">change</button>
          <child-first></child-first>
        `,
      setup() {
        const superNumber = ref<number>(0);
        // 复杂结构数据
        const mixedObj = reactive<any>({ name: "lcc", meta: { a: 1 } });

        // 保证子组件inject不能修改
        provide("superNumber", readonly(superNumber));

        provide("mixedObj", mixedObj);
        // 父组件更改
        const changeOrigin = () => {
          console.log(superNumber.value, mixedObj.meta);
          superNumber.value = 1;
          mixedObj.meta = { ...mixedObj.meta, b: 2 };
        };
        // 子组件更改
        const modifyOrigin = (params: { number: number; obj: any }) => {
          superNumber.value = params.number;
          mixedObj.meta = params.obj;
        };
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
        const modifyOrigin =
          inject<(param: { number: number; obj: any }) => void>("modifyOrigin");
        const superNumber = inject<any>("superNumber");
        const mixedObj = inject<any>("mixedObj");
        const onChange = () => {
          // const number = 666;
          // const obj = { meta1: 1 };
          // 获取父组件的方法
          // modifyOrigin?.({ number, obj });
          mixedObj.meta = { meta1: 1 };
          // 不生效 因为子组件中readonly
          superNumber.value = 55;
        };

        return { superNumber, mixedObj, onChange };
      },
    });
    app.component("grandSonFirst", {
      template: `<div>孙子组件1{{superNumber}}</div>
          <div>{{mixedObj}}</div>
          <button @click="onChange">改变</button>
        `,
      setup(props, ctx) {
        const modifyOrigin =
          inject<(param: { number: number; obj: any }) => void>("modifyOrigin") as Function;
        const superNumber = inject<any>("superNumber");
        const mixedObj = inject("mixedObj");
        const onChange = () => {
          const number = 666;
          const obj = { meta1: 1 };
          // 获取父组件的方法
          modifyOrigin({ number, obj }) ;
          // 不生效 因为子组件中readonly
          superNumber.value = 55;
        };

        return { superNumber, mixedObj, onChange };
      },
    });
  },
});
export default transferValue;
</script>
