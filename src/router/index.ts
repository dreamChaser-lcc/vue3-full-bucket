import { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { baseRoutes } from "./staticModules/index";
/**
 * 配置路由实例
 * @param app
 */
const setupRouter = (app: App<Element>) => {

  const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes: baseRoutes, 
  });
  app.use(router);
};
export default setupRouter;
