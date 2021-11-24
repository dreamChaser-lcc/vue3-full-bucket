/**
 * 懒加载模块
 */
const lazyLoadModules = {
  "view/componentTransmit": () =>
    import(/* webpackChunkName: "view/componentTransmit" */ '@/view/componentTransmit'),
  "view/useVuex": () => import('@/view/useVuex'),
  "view/icons": () => import('@/view/icons'),
}
export default lazyLoadModules;