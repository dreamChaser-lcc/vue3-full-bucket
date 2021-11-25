<!-- 左侧菜单页面  -->
<template>
  <a-layout-sider :trigger="null" collapsible>
    <div class="logo" />
    <a-menu theme="dark" mode="inline" @click="onSelect">
      <template v-for="item in baseRoutes[0].children" :key="item.path">
        <menu-item :menu-info="item"></menu-item>
      </template>
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
import MenuItem from "./menuItem.vue";

export default defineComponent({
  name: "PageSider",
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    MenuItem,
  },
  prop: {
    collapsed: { type: Boolean },
    // selectedKeys: { type: Array },
    handleSelect: { type: String },
  },
  // emits: ["update:selectedKeys"],
  setup(props, ctx) {
    // const { selectedKeys, handleSelect } = props;
    const router = useRouter();
    const onSelect = (item:any) => {
      console.log("item", item);
      // ctx.emit("update:selectedKeys", item.keypath);
      if (item.key.startsWith("/")) {
        router.push({name:item.key});
      } else {
        router.push({name:item.key});
      }
    };
    return {
      baseRoutes,
      onSelect,
    };
  },
});
</script>
