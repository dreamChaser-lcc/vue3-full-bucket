import { createApp } from "vue";
import App from "./App.vue";
import setupAntdCompont from "./plugins/AntdCompont";
import setupCustomTest from "./plugins/customTest";
import setupRouter from "./routers";

const app = createApp(App);

// 挂载全局方法
setupCustomTest(app);
// 挂载antd组件
setupAntdCompont(app);
// 挂载路由组件
setupRouter(app);

app.mount("#app");
