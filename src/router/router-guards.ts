import { store } from "@/store";
import { NavigationGuardWithThis, Router, RouteRecordName } from "vue-router";
import router from ".";

export const getDynamicRoute = async ({ to, form, next, router }: any) => {
  store.dispatch("asyncRouter/fetchRouter").then((res) => {
    const all = router.getRoutes()
    console.log(to, all);
    console.log(router.hasRoute(to.name!));
    // next({...to,replate:true})
    if (!router.hasRoute(to.name!)) {
      next({ ...to, replace: true })
    }
    else { next() }
  })
}

/**路由前守卫 */
export const createBeforeGuards = (router: Router) => {
  store.dispatch("asyncRouter/fetchRouter");

  router.beforeEach((to, form, next) => {
    console.log("router.getRoutes()", router.getRoutes())
    next()
    // getDynamicRoute({ to, form, next, router });
  })
}