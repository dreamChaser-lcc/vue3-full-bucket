import { App } from 'vue';
import { createStore } from "vuex"
import modules from "./modules"
import { IStore } from "./types"

export const store = createStore<IStore>({
  plugins: [],
  modules: modules,
})

const setupStore = (app: App) => {
  app.use(store)
}

export default setupStore;