<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: { type: String },
  },
  setup() {
    const number = ref(0);
    const handleAdd = () => {
      number.value++;
    };
    return {
      number,
      handleAdd,
    };
  },
});
</script>

<template>
  <div>
    <slot name='default'></slot>
    <h1>he{{ number }}</h1>
    <a-button @click="handleAdd">+</a-button>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
