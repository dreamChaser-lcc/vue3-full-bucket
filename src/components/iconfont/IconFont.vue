<template>
  <my-icon :type="type" v-bind="attrs" ></my-icon>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { createFromIconfontCN } from "@ant-design/icons-vue";
let MyIcon = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2636782_24ju7b81j6l.js", // 在 iconfont.cn 上生成
});
export default defineComponent({
  name: "IconFont",
  components: {
    MyIcon: MyIcon,
  },
  props: {
    /**图标 */
    type: { type: String },
    // 图标大小
    size: { type: Number },
    /**颜色 */
    color: { type: String },
    /**图标源 暂不可用*/
    scriptUrl: { type: String },
  },
  setup(props, { attrs }) {
    // const { size, color } = props;
    // console.log({...props},{...attrs})
    return {
      attrs
    };
  },
});
</script>
