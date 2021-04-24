<template>
  <div>
    <div v-for="note in notes" :key="note.id">
      <p @click="noteShow(note.id)">{{ note.title }}</p>
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
    noteShow(number) {
      this.$router.push({ name: "NoteShow", params: { id: number } });
    },
  },
};
</script>
