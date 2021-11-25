import TransitionNode from "@/components/transitionNode";
import { ArrayToTree } from "@/utils/common";
import { authorityRouter } from "@/../Mock";
import { RouteRecordRaw } from "vue-router";
import dynamicRouterModules from "./modules";
import { baseRoutes } from "./staticModules";
import router from '@/router'
import { commonRouter } from "./staticModules/common";

/**请求后端数据并处理，暂无api*/
export const fetchRouter = () => {
  return new Promise((resolve, reject) => {
    // api()
    // .then((result: any[]) => {
    //   const res = generateDynamicRouter(result);
    //   resolve(res);
    // })
    // .catch((err: any) => reject(err))
    const node = ArrayToTree(authorityRouter);
    const result = generateDynamicRouter(node);
    const layout = baseRoutes.find((i) => i.name === "layout");
    layout!.children = [...commonRouter, ...result];
    router.addRoute(layout as RouteRecordRaw)
    resolve(baseRoutes)
  });
};
/**
 * 对树解构的数据，生成route
 * @param treeNode 路由树
 * @returns
 */
export const generateDynamicRouter = (treeNode: any, pathPrefix = "") => {
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
      name:viewPath,
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
