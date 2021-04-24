<template>
  <div class="about">
    <input type="text" v-model="title" />
    <textarea cols="30" rows="10" v-model="body"> </textarea>
    <div class="button">
      <button @click="del">消去</button>
      <button @click="save">保存</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  name: "MemoDetail",
  data() {
    return {
      title: "",
      body: "",
    };
  },
  async mounted() {
    const res = await axios.get(
      `http://127.0.0.1:8003/api/memos/${this.$router.params.id}`
    );
    const memo = res.data.data;
    if (memo) {
      this.title = memo.title;
      this.body = memo.body;
    } else {
      this.$router.push("/memos");
    }
  },
  methods: {
    async updataMemo() {
      const params = {
        title: this.title,
        body: this.body,
      };
      await axios.put(
        `http://127.0.0.1:8003/api/memos/${this.$router.params.id}`,
        params
      );
      this.$router.push("/memos");
    },
    async deleteMemo() {
      await axios.delete(
        `http://127.0.0.1:8003/api/memos/${this.$router.params.id}`
      );
      this.$router.push("/memos");
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
textarea,
button {
  margin: 10px;
}

.button {
  display: flex;
}
</style>
