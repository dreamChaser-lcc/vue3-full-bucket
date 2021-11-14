<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { defineComponent, getCurrentInstance } from "vue";
import { useRoute } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $hasPermission: any;
  }
}

export default defineComponent({
  name: "App",
  components: { HelloWorld },
  setup: (props, ctx) => {
    const proxy = getCurrentInstance()!.proxy;
    const route = useRoute();
    console.log("123", route.meta);
    const meta = route.meta;
    const name = route.name;
    return {
      meta,
      name,
    };
  },
});
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite1" /> -->
  <!-- <a-button type="primary">Text Button</a-button> -->
  <!-- <h1>{{ meta }}</h1>
  <router-link to="/">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link> -->
  <router-view></router-view>
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  height:100vh;
}
</style>
