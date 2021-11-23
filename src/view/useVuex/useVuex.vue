<template>
  <div>vuex/test值：{{ computeCount }}</div>
  <a-button type="primary" @click="onCommit">action</a-button>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { IStore } from "@/store/types";
/**vuex使用页面 */
export default defineComponent({
  setup() {
    const store = useStore<IStore>();
    // const computeCount = store.state.test;
    // console.log(store.state.test);
    // watch([computeCount], (newValue, old) => {
    //   console.log(newValue, old);
    //   return newValue;
    // });
    const computeCount = computed(() => {
      return store.state.test.count;
    });
    onMounted(() => {
      // console.log(store.getters["test/getcount"]);
    });
    const onCommit = () => {
      store.commit("test/increment", { name: 123 });
    };
    return { computeCount, onCommit };
  },
});
</script>
