<template>
  <sub-page>
    <router-view v-slot="props">
      <!-- <transition> -->
      <keep-alive>
        <component :is="props.Component"> </component>
      </keep-alive>
      <!-- </transition> -->
    </router-view>
  </sub-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { SubPage } from "../defaultSlotTest";
import HelloWorld from "../HelloWorld.vue";
export default defineComponent({
  name: "TransitionNode",
  components: {
    HelloWorld,
    SubPage,
  },
  setup(props,ctx) { 
    
  },
});
</script>
