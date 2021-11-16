<template>
  subComponentq
  <slot name="default" v-bind:a="a"> </slot>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SubPage",
  setup() {
    return {
      a: 123,
    };
  },
});
</script>
