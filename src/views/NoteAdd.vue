<template>
  <div class="texts">
    <input type="text" v-model="title" placeholder="タイトルを入力" />
    <textarea
      cols="30"
      rows="10"
      v-model="body"
      placeholder="本文を入力"
    ></textarea>
    <button @click="save">保存する</button>
  </div>
</template>

<script>
export default {
  name: "NoteAdd",
  data() {
    return {
      body: "",
      title: "",
    };
  },
  methods: {
    save() {
      const payload = {
        title: this.title,
        body: this.body,
      };
      this.$store.commit("saveNote", payload);
      this.body = "";
      this.title = "";
    },
  },
};
</script>

<style scoped>
.texts {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input,
textarea {
  margin-bottom: 10px;
}
</style>
