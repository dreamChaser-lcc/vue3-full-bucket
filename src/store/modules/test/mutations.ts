import { MutationTree } from "vuex";
import { ITestState } from "./state";

export const mutations: MutationTree<ITestState> = {
  increment(state, payload) {
    // console.log(state, payload)
    state.count++
  },
  decrement(state) {
    // console.log(state)
  }
}