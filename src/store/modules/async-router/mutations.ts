import { MutationTree } from "vuex"
import { IRouterState } from "./state"

export const mutations: MutationTree<IRouterState> = {
  setMenus(state, payload) {
    state.menus = payload
  },
  decrement(state) {
    // console.log(state)
  }
}