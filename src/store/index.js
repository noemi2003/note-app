import Vue from "vue";
// import { delete } from "vue/types/umd";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
  },
  mutations: {
    addNote(state, payload) {
      const newNote = {
        id: state.notes.length + 1,
        title: payload.title,
        body: payload.body,
      };
      state.notes.push(newNote);
    },
    updateNote(state, payload) {
      const newNotes = state.notes.slice();
      for (const note of newNotes) {
        if (note.id === payload.id) {
          note.title = payload.title;
          note.body = payload.body;
        }
      }
      state.notes = newNotes;
    },
    deleteNote(state, payload) {
      // const vegetables = ["tomato", "lemon", "watermelon"];
      // const fruits = vegetables.filter(v => v !== "tomato");
      state.notes = state.notes.filter((note) => note.id !== payload.id);
    },
  }
});
