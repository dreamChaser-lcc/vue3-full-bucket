<template>
  <a-sub-menu
    v-if="menuInfo.children && menuInfo.children.length"
    :key="menuInfo.name">
    <template #title>
      <span>
        <icon-font :type="menuInfo.meta?.icon" />
        <span>{{ menuInfo.meta?.title ?? menuInfo.name }}</span>
      </span>
    </template>
    <template v-for="item in menuInfo.children" :key="item.name">
      <template v-if="item.children && item.children.length">
        <menu-item :menu-info="item" :key="item.key"></menu-item>
      </template>
      <template v-else>
        <a-menu-item :key="item.name">
         <icon-font/>
          <span>{{ item.meta?.title }}</span>
        </a-menu-item>
      </template>
    </template>
  </a-sub-menu>
  <template v-else>
    <a-menu-item :key="menuInfo.name">
      <icon-font/>
      <span>{{ menuInfo.meta?.title }}</span>
    </a-menu-item>
  </template>
</template>
<script lang="ts">
import IconFont from "@/components/iconfont";
import { defineComponent } from "vue";

export default defineComponent({
  name: "menuItem",
  components: {
    IconFont,
  },
  props: {
    menuInfo: { type: Object },
  },
  setup() {},
});
</script>
