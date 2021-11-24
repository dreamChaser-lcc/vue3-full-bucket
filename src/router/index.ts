import { ArrayToTree } from "@/utils/common";
import { authorityRouter } from "@/../Mock";
import { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { generateDynamicRouter } from "./generate-routers";
import { baseRoutes } from "./staticModules/index";
/**
 * 配置路由实例
 * @param app
 */
const setupRouter = (app: App<Element>) => {
  const node = ArrayToTree(authorityRouter);
  console.log(node);
  const result = generateDynamicRouter(node);
  console.log(result);
  const layout = baseRoutes.find((i) => i.name === "layout");
  layout!.children = [...(layout!.children as RouteRecordRaw[]), ...result];
  console.log(baseRoutes)
  const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes: baseRoutes,
  });
  app.use(router);
};
export default setupRouter;
