import dynamicRouterModules from "./modules";

/**请求后端数据并处理，暂无api*/
export const fetchRouter = () => {
  return new Promise((resolve, reject) => {
    // api()
    // .then((result: any[]) => {
    //   const res = generateDynamicRouter(result);
    //   resolve(res);
    // })
    // .catch((err: any) => reject(err))
  })
}
/**
 * 对树解构的数据，生成route
 * @param treeNode 路由树
 * @returns 
 */
export const generateDynamicRouter = (treeNode: any) => {
  return treeNode.map((item: any) => {
    const { name, url, viewPath, keepAlive, icon, sort } = item;
    const children = item.children.length ? generateDynamicRouter(item.children) : [];
    let path = '';
    if (/http(s)?:/.test(url)) {
      path = url;
    } else {
      // 去重路径
      path = [...new Set(url.split('/'))].join('/');
    }
    // 路径字符串对应到相应模块组件
    const component = dynamicRouterModules[viewPath]

    const node = {
      name,
      path,
      children,
      component,
      meta: {
        title: name,
        keepAlive,
        icon,
        sort
      }
    }
    return node;
  })
}