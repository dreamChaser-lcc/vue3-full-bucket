import DefaultSlotTest from "@/components/defaultSlotTest";
import TransitionNode from "@/components/transitionNode";
import { RouteRecordRaw } from "vue-router";
import dynamicRouterModules from "../modules";

export const commonRouter: RouteRecordRaw[] = [
  {
    path: "home",
    name: 'home',
    component: TransitionNode,
    children: [
      // {
      //   path: 'hello',
      //   name: 'hello',
      //   component: HelloWorld
      // },
      {
        path: "test",
        name: 'test',
        component: DefaultSlotTest,
        meta:{
          title:'transferValue',
        }
      }
    ]
  },
  // {
  //   path: "about",
  //   name: 'about',
  //   // redirect: "/home",
  //   component: About,
  // },
  {
    path: "transferValue",
    name: 'transferValue',
    // redirect: "/home",
    component: dynamicRouterModules['view/componentTransmit'],
    meta:{
      title:'transferValue',
    }
  },
  {
    path: 'userVuex',
    name: 'userVuex',
    component: dynamicRouterModules['view/useVuex'],
    meta:{
      title:'userVuex',
    }
  },
  {
    path: 'icons',
    name: 'icons',
    component: dynamicRouterModules['view/icons'],
    meta:{
      title:'icons',
    }
  }
]