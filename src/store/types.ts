import { IRouterState } from "./modules/async-router/state";
import { ITestState } from "./modules/test/state";

export interface IStore {
  test: ITestState,
  asyncRouter:IRouterState;
}