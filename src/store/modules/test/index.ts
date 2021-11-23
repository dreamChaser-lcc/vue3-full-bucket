import { Module } from "vuex"
import { IStore } from "@/store/types"
import { actions } from "./actions"
import { mutations } from "./mutations"
import state, { ITestState } from "./state"
import { getters } from "./getters"

/**模块化状态树 */
const test: Module<ITestState, IStore> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  // state?: S | (() => S),
  // getters?: GetterTree<S, R>,
  // actions?: ActionTree<S, R>,
  // mutations?: MutationTree<S>,
  // modules?: ModuleTree<R>,
}
export default test;