<!-- 左侧菜单页面  -->
<template>
  <a-layout-sider :trigger="null" v-model:collapsed="collapsed" collapsible>
    <div class="logo" />
    <a-menu
      v-model:open-keys="openKeys"
      v-model:selected-keys="selectedKeys"
      theme="dark"
      mode="inline"
      @click="onClickItem"
    >
      <template v-for="item in menus" :key="item.path">
        <menu-item :menu-info="item"></menu-item>
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, toRefs, watch } from "vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { baseRoutes } from "@/router/staticModules/index";
import { RouteRecordRaw, useRoute, useRouter } from "vue-router";
import MenuItem from "./menuItem.vue";
import { store } from "@/store";

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
  props: {
    collapsed: { type: Boolean },
  },
  setup(props, ctx) {
    const currentRoute = useRoute();
    const router = useRouter();
    // 打开的子菜单
    const getOpenKeys = () => {
      return [currentRoute.matched[1]?.name];
    };
    const state = reactive({
      openKeys: getOpenKeys(),
      selectedKeys: [currentRoute.name],
    });
    // 菜单
    const menus = computed(() => {
      return store.getters["asyncRouter/getMenus"].find(
        (val: RouteRecordRaw) => val.name === "layout"
      ).children;
    });
    // 监听菜单左右收缩状态
    watch(
      () => props.collapsed,
      (newVal) => {
        state.openKeys = newVal ? [] : getOpenKeys();
        state.selectedKeys = [currentRoute.name];
      }
    );
    // 跟随页面路由变化，切换菜单选中状态
    watch(
      () => currentRoute.fullPath,
      () => {
        if (currentRoute.name == "login") return;
        console.log(currentRoute.fullPath, state, currentRoute.name);
        state.openKeys = getOpenKeys();
        state.selectedKeys = [currentRoute.name];
      }
    );
    // 点击菜单
    const onClickItem = (item: any) => {
      console.log("item", item);
      if (/http(s)?:/.test(item.key)) {
        window.open(item.key);
      } else {
        router.push({ name: item.key });
      }
    };
    return {
      onClickItem,
      ...toRefs(state),
      menus,
    };
  },
});
</script>
