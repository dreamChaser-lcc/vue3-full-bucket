<template>
  <slot></slot>
  <!-- <div>
    <suspense>
      <template #fallback> 
        Loading
      </template>
      <template #default>
        <slot name="default" v-bind:a="a"> </slot>
      </template>
    </suspense>
  </div> -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SubPage",
  setup(props, ctx) {
    return {
      a: 123,
    };
  },
});
</script>
