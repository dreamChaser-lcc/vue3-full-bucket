
import { RouteRecordRaw } from "vue-router";
// 组件
import TransitionNode from "@/components/transitionNode";
import transferValue from "@/view/componentTransmit"
import Layout from "@/layout/index.vue";
import DefaultSlotTest from "@/components/defaultSlotTest";
import HelloWorld from "@/components/HelloWorld.vue";

import About from "@/components/About.vue";
import userVuex from "@/view/useVuex";

const baseRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "path1",
    component: Layout,
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
        component: transferValue,
      },
      {
        path: 'userVuex',
        name: 'userVuex',
        component: userVuex
      }
    ],
  },
];
export default baseRoutes