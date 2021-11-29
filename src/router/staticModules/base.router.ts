
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
import { commonRouter } from "./common";
import { errorRoutes } from "./error";

const baseRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/layout/index.vue"),
    children: [...commonRouter]
  },
  errorRoutes
];
export default baseRoutes