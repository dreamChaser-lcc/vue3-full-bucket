import { fetchRouter } from "@/router/generate-routers";
import { IStore } from "@/store/types";
import { RouteRecordRaw } from "vue-router";
import { ActionTree } from "vuex";
import { IRouterState } from "./state";

export const actions: ActionTree<IRouterState, IStore> = {
  async fetchRouter(context): Promise<RouteRecordRaw[]> {
    const router = await fetchRouter();
    context.commit('setMenus', router)
    return router;
  }
}