<template>
  <div class="about">
    <input
      type="text"
      v-model="title"
      placeholder="タイトルを入力してください"
    />
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      v-model="body"
      placeholder="本文を入力してください"
    ></textarea>
    <button @click="save">保存</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MemoAdd",
  data() {
    return {
      title: "",
      body: "",
    };
  },
  computed: {},
  methods: {
    async save() {
      const payload = {
        title: this.title,
        body: this.body,
      };
      await axios.post("http://127.0.0.1:8003/api/memos", payload);
      this.$router.push({ name: "Memos" });
    },
  },
};
</script>

<style>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input,
textarea {
  margin-bottom: 10px;
}
</style>
