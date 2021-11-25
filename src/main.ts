import { createApp } from "vue";
import App from "./App.vue";
import setupAntdCompont from "./plugins/AntdCompont";
import setupCustomTest from "./plugins/customTest";
import { setupRouter } from "./router";
import setupStore from "./store";

const app = createApp(App);

// 挂载全局方法
setupCustomTest(app);
// 挂载antd组件
setupAntdCompont(app);
// 挂载路由组件
setupRouter(app);
// 挂载全局状态
setupStore(app)

app.mount("#app");

export {
  app
}