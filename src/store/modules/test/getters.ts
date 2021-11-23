import { GetterTree } from "vuex";
import { IStore } from "@/store/types";
import { ITestState } from "./state";

export const getters: GetterTree<ITestState, IStore> = {
  getcount(state, getters, rootState, rootGetters) {
    console.log(state, getters, rootState, rootGetters)
    const count = state.count;
    return count
  }
}