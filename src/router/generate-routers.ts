// 中转路由的组件
import TransitionNode from "@/components/transitionNode";
// 模拟数据
import { authorityRouter } from "@/../Mock";
// 批量导入文件
import dynamicRouterModules from "./modules";
// 路由
import { baseRoutes } from "./staticModules";
import router from '@/router';
import { RouteRecordRaw } from "vue-router";
import { commonRouter } from "./staticModules/common";
// 方法
import { toHump, ArrayToTree } from "@/utils/router/utils";
import { notFound } from "./staticModules/error";

/**请求后端数据并处理，暂无api*/
export const fetchRouter = (): Promise<RouteRecordRaw[]> => {
  return new Promise((resolve, reject) => {
    // api()
    // .then((result: any[]) => {
    //   const res = generateDynamicRouter(result);
    //   resolve(res);
    // })
    // .catch((err: any) => reject(err))

    // 转换成树结构
    const node = ArrayToTree(authorityRouter);
    // 树结构处理成路由格式
    const result = generateDynamicRouter(node);
    const layout = baseRoutes.find((i) => i.name === "layout");
    layout!.children = [...commonRouter, ...result];
    // 添加路由(已存在会覆盖)
    router.addRoute(layout as RouteRecordRaw);
    router.addRoute(notFound);
    resolve(baseRoutes);
  });
};
/**
 * 对树解构的数据，生成route
 * @param treeNode 路由树
 * @returns
 */
export const generateDynamicRouter = (treeNode: RouteRecordRaw[], pathPrefix = ""): RouteRecordRaw[] => {
  return treeNode.map((item: any) => {
    const { name, url, viewPath, keepAlive, icon, sort } = item;

    let path = "";
    if (/http(s)?:/.test(url)) {
      path = url;
    } else {
      // 去重路径
      path = url.startsWith("/") ? url : "/" + url;
      path = url.startsWith(pathPrefix) ? path : pathPrefix + path;
      path = [...new Set(path.split("/"))].join("/");
    }

    const children = item.children.length
      ? generateDynamicRouter(item.children, path)
      : [];
    // 路径字符串对应到相应模块组件
    const component = item.children.length
      ? TransitionNode
      : dynamicRouterModules[viewPath];

    const node = {
      name: `${viewPath ? toHump(viewPath) : path}-${item.id}`,
      path,
      children,
      component,
      meta: {
        title: name,
        keepAlive,
        icon,
        sort,
      },
    };
    return node;
  });
};
