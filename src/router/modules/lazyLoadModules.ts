/**
 * 懒加载模块
 */
const lazyLoadModules = {
  "view/componentTransmit": () =>
    import(/* webpackChunkName: "view/componentTransmit" */ '@/view/componentTransmit'),
  "view/useVuex": () => import('@/view/useVuex'),
}
export default lazyLoadModules;