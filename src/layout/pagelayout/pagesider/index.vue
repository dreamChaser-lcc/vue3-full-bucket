<!-- 左侧菜单页面  -->
<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo" />
    <a-menu
      theme="dark"
      mode="inline"
      @click="onSelect"
      :selectedKeys="selectedKeys">
      <a-menu-item v-for="item in baseRoutes[0].children" :key="item.name">
        <user-outlined />
        <span>{{ item.name }}</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { baseRoutes } from "@/router/staticModules/index";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PageSider",
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  props: {
    collapsed: { type: Boolean },
    selectedKeys: { type: Array },
    handleSelect: { type: String },
  },
  emits: ["update:selectedKeys"],
  setup(props, ctx) {
    const { selectedKeys, handleSelect } = props;
    const router = useRouter();
    const onSelect = (item: any) => {
      ctx.emit("update:selectedKeys", item.keypath);

      router.replace(item.key);
    };
    return {
      baseRoutes,
      onSelect,
    };
  },
});
</script>
