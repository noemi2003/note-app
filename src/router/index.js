import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NoteAdd from "../views/NoteAdd.vue";
import Notes from "../views/Notes.vue";
import NoteShow from "../views/NoteShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/notes/add",
    name: "NoteAdd",
    component: NoteAdd,
  },
  {
    path: "/notes",
    name: "Notes",
    component: Notes,
  },
  {
    path: "/notes/:id",
    name: "NoteShow",
    component: NoteShow,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
