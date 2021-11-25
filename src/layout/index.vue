<!-- 总布局页面  -->
<template>
  <div>
    <a-layout>
      <page-sider :collapsed="collapsed"> </page-sider>
      <a-layout>
        <page-head v-model:collapsed="collapsed"></page-head>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px',
          }">
          <router-view v-slot="{ Component }">
            <!-- <transition name="fade" mode="out-in" appear> -->
            <keep-alive>
              <component :is="Component"></component>
            </keep-alive>
            <!-- </transition> -->
          </router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { PageHead, PageSider } from "./pagelayout";
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PageHead,
    PageSider,
  },
  setup() {
    const selectedKeys = ref<string[]>(["userVuex"]);
    const collapsed = ref<boolean>(false);
    // console.log(selectedKeys.value);
    const handleSelect = (value: any) => {
      // console.log(value)
      // selectedKeys.value.push(value.key);
    };
    return { selectedKeys: selectedKeys, collapsed, handleSelect };
  },
});
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
.site-layout .site-layout-background {
  background: #fff;
}
.ant-layout.ant-layout-has-sider {
  flex-direction: row;
  height: 100vh;
}
</style>
