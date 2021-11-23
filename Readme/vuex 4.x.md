# vuex 概括

- 状态管理工具
- vuex 4.x 版本

## 安装

```CLI
  npm install vuex@next --save
```

## 获取状态和改变状态

```ts
// 获取状态
store.state.属性名;
// 改变状态,dispatch触发活动，活动再提交突变类型，改变
store.dispatch("actionType");
const actions = ()=>{
    actionType(context,payload){
      context.commit('突变类型名')
    }
}
// 直接提交突变
store.commit("突变类型名");
```

## 主要组成

| 核心概念  | 作用                                                                 |
| --------- | -------------------------------------------------------------------- |
| state     | 全局的状态,stroe.state                                               |
| getters   | 获取状态，可以用作一些长度查询，或过滤一些处理(最好不要改变原有状态) |
| actions   | 行为，可以是异步行为                                                 |
| mutations | 突变，真正修改全局状态的方法，只能是同步行为，不能异步               |
| modules   | vuex 模块化，可以将单一状态树，分成多个模块进行管理，支持嵌套        |

### state (状态)

```ts
  setup(){
    const store = useStore<IStore>();
    // 获取状态
    console.log(store.state.属性名);
    // 计算属性 变成响应式变量
    const computeName = computed(()=>store.state.属性名)
    ...
  }
```

### getters （相当于拦截器）

可用于一些功能性的方法处理

```ts
export const getters: GetterTree<ITestState, IStore> = {
  /*
   * 获取列表长度的功能
   * @param state 当前模块的状态
   * @param getters 当前模块的方法
   * @param rootState 状态树的根，所有状态
   * @param rootGetters 所有的getters方法
   */
  getListLength(state, getters, rootState, rootGetters) {
    const length = state.list.length;
    return count;
  },
  /*
   * 查找符合条件的功能方法
   * @params 同上
   */
  findToList(state, getters, rootState, rootGetters) {
    const item = state.list.find((i) => i.name === "lcc");
    return item;
  },
};
```

### actions （行为）

```ts
export const actions: ActionTree<ITestState, IStore> = {
  /*
   * count增量
   * @param context
   * @param payload 载荷，可以载荷要修改的状态和类型，例如：{type:'add',changeState:{...}}
   */
  imcrementCount(context,payload) {
    // 转交给mutations(突变)，即incremnt,去处理
    context.commit("increment", { count: 123 });
  },
  /*
   * 也可以做一些异步行为
   * 比如请求数据
   */
  async fecthApi(context,payload){
    const res = await fetchApi(...);
    // 转交给突变
    context.commit('dataHandler',{type:'fetch',state:res});
  }
  /*
   * 也可以触发其他的action
   */
  async transferSite(context,payload){
    // 触发上面的一个行为
    context.state.dispatch('fecthApi',payload);
  }
};
```

### mutations (突变)

最终使得状态进行改变的方法

```ts
export const mutations: MutationTree<ITestState> = {
  /*
   * count的增量
   * state 全局状态
   * payload 载荷
   */
  increment(state, payload) {
    // 改变全局状态的count
    state.count++;
    // 或
    // state.count = payload.state.count;
  },
  decrement(state) {
    // console.log(state)
  },
};
```

### modules （全局状态模块化）

- 当 `namespaced 为 true `时，
- 触发行为需要`加上模块名`比如 store.dispatch("`test`/'突变名'"),例如：store.dispatch("`test`/increment")
- 使用 getters 也一样，store.getters["test/getListLength"];
- 引起突变也需要`加上模块名称`，例如 store.commit("`test`/getListLength",payload),或者其他写法

```ts
const test: Module<ITestState, IStore> = {
  namespaced: true, //模块命名空间
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
  // state?: S | (() => S),
  // getters?: GetterTree<S, R>,
  // actions?: ActionTree<S, R>,
  // mutations?: MutationTree<S>,
  // modules?: ModuleTree<R>,
};
```

### store vuex 的可配置属性

```ts
export interface StoreOptions<S> {
  state?: S | (() => S); // 状态
  getters?: GetterTree<S, S>; // 拦截器
  actions?: ActionTree<S, S>; // 活动
  mutations?: MutationTree<S>; // 突变
  modules?: ModuleTree<S>;  // 模块化
  plugins?: Plugin<S>[];  // 插件
  strict?: boolean;   // 严格模式
  devtools?: boolean; // 开发工具
}
```

# 详情可查看官网地址

https://vuex.vuejs.org/
