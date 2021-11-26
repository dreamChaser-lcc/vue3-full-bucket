<template>
  <div>vuex/test值：{{ computeCount }}</div>
  <a-button type="primary" @click="onCommit">action</a-button>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { IStore } from "@/store/types";
import dynamicRouterModules from "@/router/modules";
import { authorityRouter } from "@/../Mock/index";
import { generateDynamicRouter } from "@/router/generate-routers";
import { baseRoutes } from "@/router/staticModules";
import { RouteRecordRaw, useRouter } from "vue-router";

/**vuex使用页面 */
export default defineComponent({
  setup() {
    const store = useStore<IStore>();
    const router = useRouter();
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
      // console.log(dynamicRouterModules)
      // console.log(store.getters["test/getcount"]);
      // const node = ArrayToTree(authorityRouter);
      // console.log(node);
      // const result = generateDynamicRouter(node);
      // console.log(result);
      // const layout = baseRoutes.find((i) => i.name === "layout");
      // layout!.children = [...(layout!.children as RouteRecordRaw[]), ...result];
      // router.addRoute(layout as RouteRecordRaw );
      // console.log(layout)
    });
    const onCommit = () => {
      store.commit("test/increment", { name: 123 });
    };
    return { computeCount, onCommit };
  },
});
</script>
