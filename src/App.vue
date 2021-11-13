<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { defineComponent, getCurrentInstance } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $hasPermission: any;
  }
}

export default defineComponent({
  name: "App",
  components: { HelloWorld },
  setup: () => {
    const proxy = getCurrentInstance()!.proxy;
    console.log(proxy && proxy.$hasPermission(1, 2));
  },
});
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite1" />
   <a-button type="primary">Text Button</a-button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
