<template>
  <div>
    <div v-for="note in notes" :key="note.id">
      <button @click="transition(note.id)">
        <a>{{ note.title }}</a>
        <p>{{ note.date.toLocaleString() }}</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notes",
  computed: {
    notes() {
      return this.$store.state.notes;
    },
  },
  methods: {
    transition(number) {
      this.$router.push({ name: "NoteShow", params: { id: number } });
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  background: none;
}
</style>
