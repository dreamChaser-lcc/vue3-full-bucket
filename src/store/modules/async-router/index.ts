import { IStore } from "@/store/types";
import { Module } from "vuex";
import { actions } from "./actinos";
import { routerGetters } from "./getters";
import { mutations } from "./mutations";
import { IRouterState, state } from "./state";

const asyncRouter: Module<IRouterState, IStore> = {
  namespaced: true,
  state,
  getters: routerGetters,
  actions,
  mutations,
  // state?: S | (() => S),
  // getters?: GetterTree<S, R>,
  // actions?: ActionTree<S, R>,
  // mutations?: MutationTree<S>,
  // modules?: ModuleTree<R>,
}
export default asyncRouter;