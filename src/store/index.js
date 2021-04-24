import Vue from "vue";
// import { delete } from "vue/types/umd";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    memos: [],
  },
  mutations: {
    addNote(state, payload) {
      const newNote = {
        id: state.memos.length + 1,
        title: payload.title,
        body: payload.body,
        date: payload.date,
      };
      state.memos.push(newNote);
    },
    updateNote(state, payload) {
      const newmemos = state.memos.slice();
      for (const memo of newmemos) {
        if (memo.id === payload.id) {
          memo.title = payload.title;
          memo.body = payload.body;
          memo.date = payload.date;
        }
      }
      state.memos = newmemos;
    },
    deleteNote(state, payload) {
      // const vegetables = ["tomato", "lemon", "watermelon"];
      // const fruits = vegetables.filter(v => v !== "tomato");
      state.memos = state.memos.filter((memo) => memo.id !== payload.id);
    },
  },
});
