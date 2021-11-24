
import { RouteRecordRaw } from "vue-router";
// 组件
import TransitionNode from "@/components/transitionNode";
import transferValue from "@/view/componentTransmit"
import Layout from "@/layout/index.vue";
import DefaultSlotTest from "@/components/defaultSlotTest";
import HelloWorld from "@/components/HelloWorld.vue";

import About from "@/components/About.vue";
import userVuex from "@/view/useVuex";
import dynamicRouterModules from "@/router/modules";

const baseRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "layout",
    component: ()=>import("@/layout/index.vue"),
    children: [
      {
        path: "home",
        name: 'home',
        // redirect: "/home/hello",
        component: TransitionNode,
        children: [
          {
            path: 'hello',
            name: 'hello',
            component: HelloWorld
          },
          {
            path: 'test',
            name: 'test',
            component: DefaultSlotTest
          }
        ]
      },
      {
        path: "about",
        name: 'about',
        // redirect: "/home",
        component: About,
      },
      {
        path: "transferValue",
        name: 'transferValue',
        // redirect: "/home",
        component: dynamicRouterModules['view/componentTransmit'],
      },
      {
        path: 'userVuex',
        name: 'userVuex',
        component: dynamicRouterModules['view/useVuex']
      },
      {
        path: 'icons',
        name: 'icons',
        component: dynamicRouterModules['view/icons']
      }
    ],
  },
];
export default baseRoutes