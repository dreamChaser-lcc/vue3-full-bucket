<template>
  <a-layout-header style="background: #fff; padding: 0">
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="() => $emit('update:collapsed', !collapsed)" />
    <menu-fold-outlined
      v-else
      class="trigger"
      @click="
        () => {
          $emit('update:collapsed', !collapsed);
        }
      " />
  </a-layout-header>
</template>
<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
const PageHead = defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  name: "PageHead",
  props: {
    collapsed: {
      type: Boolean,
    },
  },
  emits: ["update:collapsed"],
  setup(props, ctx) {
   
  },
});
export default PageHead;
</script>
