import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
  },
  mutations: {
    saveNote(state, payload) {
      const NewNote = {
        id: state.notes.length + 1,
        title: payload.title,
        body: payload.body,
      };
      state.notes.push(NewNote);
    },
    updataNote(state, payload) {
      const NewNote = state.notes.slice();
      for (const note of NewNote) {
        if (note.id === payload.id) {
          note.title = payload.title;
          note.body = payload.body;
        }
      }
      state.notes = NewNote;
    },
    delNote(state, payload) {
      state.notes = state.notes.filter((note) => note.id !== payload.id);
    },
  },
});
