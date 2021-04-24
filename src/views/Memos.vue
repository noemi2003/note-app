<template>
  <div>
    <div v-for="memo in memos" :key="memo.id">
      <button @click="transition(memo.id)">
        <a>{{ memo.title }}</a>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Memos",
  data() {
    return {
      memos: [],
    };
  },
  async mounted() {
    const res = await axios.get("http://127.0.0.1:8003/api/memos");
    this.memos = res.data.data;
    console.log(this.memos)
  },
  methods: {
    transition(number) {
      this.$router.push({ name: "MemoDetail", params: { id: number } });
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
