
import { App } from "vue";
import { Button, ConfigProvider } from "ant-design-vue";
import 'ant-design-vue/dist/antd.css';

const setupAntdCompont = (app: App<Element>) => {
  app
  .use(Button)
};
export default setupAntdCompont;