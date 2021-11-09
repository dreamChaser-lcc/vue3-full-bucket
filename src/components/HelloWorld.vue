<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: { type: String },
  },
});
</script>

<template>
  <h1>{{ msg }}</h1>
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
