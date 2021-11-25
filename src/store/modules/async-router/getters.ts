import { IStore } from "@/store/types";
import { GetterTree } from "vuex";
import { IRouterState } from "./state";

export const routerGetters:GetterTree<IRouterState, IStore> = {
    getMenus(state){
      return state.menus;
    },
    getKeepAliveComponents(state){
      return state.keepAliveComponents;
    },
}