import { App } from "vue";
import { Button, ConfigProvider, Layout, Menu } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
/**
 * 全局挂载常用组件
 * @param app
 */
const setupAntdCompont = (app: App<Element>) => {
  app.use(Button)
  .use(Layout)
  .use(Menu);
};
export default setupAntdCompont;