import { store } from "@/store";
import { Router } from "vue-router";
// 加载进度条
import NProgress from 'accessible-nprogress'
import 'accessible-nprogress/src/styles.css'
import { debounce } from "@/utils/lodash/chunk";

/**获取最新路由表 */
export const getDynamicRoute = debounce(({ to, form, next, hasRoute }: any) => {
  store.dispatch("asyncRouter/fetchRouter").then((_allRoutes) => {
    if (!hasRoute) {
      // 找不到路由，是因为动态获取路由，路由未加载过来
      // 所以将当前需要跳转的在进行重定向跳转一次
      next({ ...to, replace: true });
    }
    else {
      next();
      NProgress.done();
    }
  })
}) 

/**路由前守卫 */
export const createBeforeGuards = (router: Router) => {

  router.beforeEach((to, form, next) => {
    // 获取token,未实现
    const token = 'token';
    NProgress.start();
    if (token) {
      if (to.name === 'login') {
        // 跳转到默认页
      } else {
        const hasRoute = router.hasRoute(to.name ?? '');
        getDynamicRoute({ to, form, next, hasRoute });
        if (to.name==='error') {
          next();
          NProgress.done();
        }
      }
    } else {
      console.log("router.getRoutes()", router.getRoutes());
      if (to.name === 'login') {
        // 跳转到登录页，未实现
        // next()  
      } else {
        // 或跳转到不需要登录的接口，未实现
      }
    }
  })
}