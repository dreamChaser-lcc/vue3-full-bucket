<template>
  <div class="icons-box">
    <a-card>
      <template #title>
        <!-- 菜单图标（<a :href="`${prefix}iconfont.js`">/public/iconfont.js</a>） -->
      </template>
      <template v-for="iconItem in iconConfig" :key="iconItem.code">
        <a-card-grid @click="copyIcon(iconItem)">
          <div>
            <icon-font :type="iconItem.code" style="font-size: 26px" />
          </div>
          <div>{{ iconItem.title }}</div>
          <div>{{ iconItem.code }}</div>
        </a-card-grid>
      </template>
    </a-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// 组件
import IconFont from "@/components/iconfont";
import { Card, message } from "ant-design-vue";
// 方法
import { copyText } from "@/utils/common";
// 常量
import { iconConfig } from "./iconConfig";

export default defineComponent({
  components: {
    IconFont,
    [Card.name]: Card,
    [Card.Grid.name]: Card.Grid,
  },
  setup() {
    console.log('IconFont',IconFont.name)
    const copyIcon = async (iconItem: { title: string; code: string }) => {
      await copyText(iconItem.code);
      message.success(`${iconItem.code}  复制成功`);
    };
    return {
      iconConfig,
      copyIcon,
    };
  },
});
</script>

<style lang="css" scoped>
.icons-box {
  display: flex;
  justify-content: center;
}
.icons-box :deep(.ant-card) {
  max-width: 80vw;

  width: 75vw;
}
.icons-box :deep(.ant-card) .ant-card-body {
  display: flex;
  flex-wrap: wrap;
}
.icons-box :deep(.ant-card) .ant-card-body .ant-card-grid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
}
.icons-box :deep(.ant-card) .ant-card-body .ant-card-grid .anticon {
  margin-bottom: 14px;
}
</style>
