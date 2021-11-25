import { fetchRouter } from "@/router/generate-routers";
import { IStore } from "@/store/types";
import { ActionTree } from "vuex";
import { IRouterState } from "./state";

export const actions: ActionTree<IRouterState, IStore> = {
  async fetchRouter(context) {
    const router = await fetchRouter();
    context.commit('setMenus',router)
    return router;
  }
}