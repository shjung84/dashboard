import { createWebHistory, createRouter } from "vue-router";
// import _ from "lodash";

import Layout from "@/layout/page";
import PageNotFound from "@/views/PageNotFound.vue";

// import homeRouter from "./modules/home";

// export const constantRoutes = _.concat(
//   homeRouter,
//   {
//     path: "/",
//     redirect: "/home",
//   },
//   { path: "*", component: PageNotFound },
// );

export const constantRoutes = [
  {
    path: "/",
    redirect: "/MainPage",
    component: Layout,
    children: [
      {
        path: "/MainPage",
        component: () => import("@/views/MainPage"),
        meta: {
          title: "MainPage",
        },
      },
      {
        path: "Rooms",
        component: () => import("@/views/Rooms"),
        meta: {
          title: "Rooms",
        },
        props: true,
      },
      {
        path: "Devices",
        component: () => import("@/views/Devices"),
        meta: {
          title: "Devices",
        },
      },
      {
        path: "Members",
        component: () => import("@/views/Members"),
        meta: {
          title: "Members",
        },
      },
      {
        path: "Logout",
        component: () => import("@/views/Logout"),
        meta: {
          title: "Logout",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
  {
    path: "/404",
    component: PageNotFound,
    meta: {
      title: "PageNotFound",
    },
  },
];

/**
 * createRotuer :
 * 실제 Vue Router 인스턴스를 생성할 때 쓰이는 function
 * */
const router = createRouter({
  /**
   * createWebHashHistory :
   * Vue Router를 통해 URL로 매핑된 vue 컴포넌트를 전환할 시에 필요한 히스토리 관리 기법을,
   * 해시형으로 쓸 수 있게 해주는 인스턴스를 생성하는 function
   */
  history: createWebHistory("/dashboard/"),
  routes: constantRoutes,
});

export { router };
