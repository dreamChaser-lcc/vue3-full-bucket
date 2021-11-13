import { App } from "@vue/runtime-core";

const hasPermissionMethod = (option: any) => {
  return "hasPermissionMethod";
};

const install = (app: App<Element>) => {
  app.config.globalProperties.$hasPermission = hasPermissionMethod;
};

export default install;
