import { ActionTree } from "vuex";
// 根state类型
import { IStore } from "@/store/types";
// 当前module的state类型
import { ITestState } from "./state";

export const actions: ActionTree<ITestState, IStore> = {
  imcrementCount(context) {
    context.commit('increment',{name:123}) 
  }
}