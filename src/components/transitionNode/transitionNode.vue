<template>
  <hello-world msg='123213'>
    <router-view v-slot="{ Component }">
      <!-- <transition> -->
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
      <!-- </transition> -->
    </router-view>
  </hello-world>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "../HelloWorld.vue";
export default defineComponent({
  name: "TransitionNode",
  components: {
    HelloWorld,
  },
});
</script>
