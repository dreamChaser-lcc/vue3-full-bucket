<template>
  <slot v-if="error"></slot>
  <suspense v-else>
    <template #fallback> Loading </template>
    <template #default>
      <slot name="default"></slot>
    </template>
  </suspense>
</template>
<script lang="ts">
/** 路由子加载 过渡组件  */
import { defineComponent, onErrorCaptured, ref } from "vue";
export default defineComponent({
  name: "SubPage",
  setup(props, ctx) {
    const error = ref();
    onErrorCaptured((err: Error) => {
      error.value = err.message;
    });
    return { error };
  },
});
</script>
