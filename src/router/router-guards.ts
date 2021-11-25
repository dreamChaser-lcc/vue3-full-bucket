import { store } from "@/store";
import { Router } from "vue-router";
import { fetchRouter } from "./generate-routers";

export const getDynamicRoute = async () => {
  store.dispatch("asyncRouter/fetchRouter").then((res) => console.log(res))
}

/**路由前守卫 */
export const createBeforeGuards = (router: Router) => {
  router.beforeEach((to, form, next) => {
    console.log(to, form, next);
    getDynamicRoute()
    next()
  })
}