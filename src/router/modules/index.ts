/**
 * 批量整合模块
 * @returns  dynamicRouterModules
 * 主要功能，加载lazyLoadModules文件，并import
 */

// Record<string,any> => 属性名为string类型，值为any的对象
const dynamicRouterModules: Record<string, any> = {}

const moduleFiles = import.meta.globEager('./*.ts');

Object.keys(moduleFiles).forEach(fileKey => {
  const module = moduleFiles[fileKey].default;

  Object.keys(module).forEach((moduleName: string) => {
    dynamicRouterModules[moduleName] = module[moduleName]
  })
})
// console.log(dynamicRouterModules)

export default dynamicRouterModules;