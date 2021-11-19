<template>
  <div>123</div>
  <SuperFirst></SuperFirst>
</template>
<script lang="ts">
import { ALL } from "dns";
import {
  AppContext,
  defineComponent,
  getCurrentInstance,
  ref,
  defineExpose,
  onMounted,
} from "vue";
const transferValue = defineComponent({
  setup() {
    const appContext: AppContext = getCurrentInstance()!.appContext;
    const app = appContext.app;
    app.component("SuperFirst", {
      template: `
        <div>父组件1{{superval}}</div>
        <button @click="sendValue">send</button>
        <child-first v-model:superval="superval" ref='childRef'></child-first>
      `,
      setup() {
        const superval = ref<string>("父组件的值");
        const childRef = ref<any>(null);
        const sendValue = () => {
          // 可以拿到son组件实例，并调用其setup返回的所有信息
          console.log(childRef.value);

          // 通过调用son组件实例的方法，向其传递数据
          childRef.value;
        };
        onMounted(() => {
          childRef.value.childFunc();
        });
        return { superval, childRef, sendValue };
      },
    });
    app.component("ChildFirst", {
      template: `<div>子组件1{{parent}}</div>
        <div>{{superval}}</div>
        <button @click="onChange">改变</button>
      `,
      props: {
        superval: {
          type: String,
        },
      },
      emits: ["update:superval", "childFunc"],
      setup(props, ctx) {
        const onChange = () => {
          ctx.emit("update:superval", "改变");
        };
        const childFunc = () => {
          console.log("子组件的方法");
        };
        ctx.emit("childFunc", childFunc);
        const parent = 2;
        return { parent, childFunc, onChange };
      },
    });
  },
});
export default transferValue;
</script>
