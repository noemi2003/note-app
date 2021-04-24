import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MemoAdd from "../views/MemoAdd.vue";
import Memos from "../views/Memos.vue";
import MemoDetail from "../views/MemoDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/memos/add",
    name: "MemoAdd",
    component: MemoAdd,
  },
  {
    path: "/memos",
    name: "Memos",
    component: Memos,
  },
  {
    path: "/memos/:id",
    name: "MemoDetail",
    component: MemoDetail,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
