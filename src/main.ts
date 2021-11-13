import { createApp } from "vue";
import App from "./App.vue";
import setupCustomTest from "./plugins/customTest";

const app = createApp(App);

// 挂载全局方法
setupCustomTest(app);

app.mount("#app");
