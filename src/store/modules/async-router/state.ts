import { RouteRecordRaw } from "vue-router";

export interface IRouterState {
  menus: RouteRecordRaw[],
  keepAliveComponents: string[]
}
export const state: IRouterState = {
  menus: [],
  keepAliveComponents: []
}