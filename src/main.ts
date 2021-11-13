import { createApp } from "vue";
import App from "./App.vue";
import setupAntdCompont from "./plugins/AntdCompont";
import setupCustomTest from "./plugins/customTest";

const app = createApp(App);

// 挂载全局方法
setupCustomTest(app);
// 挂载antd组件
setupAntdCompont(app);

app.mount("#app");
