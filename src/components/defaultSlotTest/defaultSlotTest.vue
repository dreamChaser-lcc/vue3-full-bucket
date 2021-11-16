<template>
  <sub-page>
    <template v-slot="props">
      <div>{{count}} {{props}}SuperComponent</div>
    </template>
  </sub-page>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import SubPage from "./subView/sub.vue";
const DefaultSlotTest = defineComponent({
  name: "DefaultSlotTest",
  components: {
    SubPage,
  }, 
  setup(){
    const count = ref(1);
    return {
     count
    }
  }
 
});
export default DefaultSlotTest;
</script>
