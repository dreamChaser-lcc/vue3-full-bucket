/** 加载模块
 * @param viewpath 路径
 * @param filename 文件名
 */
const getAsyncModules = (viewpath: string, fileName = 'index') => {
  // 环境变量绝对路径，默认/
  const BASE_URL = import.meta.env.BASE_URL;
  
  /**vue-router 动态导入*/
  // if (viewpath.endsWith('.vue')) {
  //   return () => import(`${BASE_URL}src/view/${viewpath}`)
  // } else {
  //   // return () => import(/* @vite-ignore */ `${BASE_URL}src/view/${viewpath}/${fileName}`);
  // }

  /**vite 动态导入 */
  const view = import.meta.glob(`../../view/**/*.ts`)
  // console.log(view)
  return view[`../../view/${viewpath}/${fileName}.ts`]
}

/**
 * 懒加载模块
 */
const lazyLoadModules = {
  "view/componentTransmit": () =>
    import(/* webpackChunkName: "view/componentTransmit" */ '@/view/componentTransmit'),
  "view/useVuex": () => import('@/view/useVuex'),
  "view/icons": getAsyncModules('icons'),
}
export default lazyLoadModules;