import { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Layout from "../layout/index.vue";
/**
 * 配置路由实例
 * @param app
 */
const setupRouter = (app: App<Element>) => {
  const routes: RouteRecordRaw[] = [
    {
      path: "/",
      name: "path1",
      component: Layout,
      children: [
        {
          path: "123",
          redirect: "/home",
          component: HelloWorld,
        },
      ],
    },
  ];
  const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  });
  app.use(router);
};
export default setupRouter;
