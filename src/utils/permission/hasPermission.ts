import { App } from "@vue/runtime-core";

const hasPermissionMethod = (option: any) => {
  return "hasPermissionMethod";
};

/**
 * 挂载全局方法
 * @param app 
 */
const install = (app: App<Element>) => {
  app.config.globalProperties.$hasPermission = hasPermissionMethod;
};

export default install;
