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
export default {
  name: "NoteAdd",
  data() {
    return {
      title: "",
      body: "",
    };
  },
  computed: {},
  methods: {
    save() {
      const payload = {
        title: this.title,
        body: this.body,
        date: new Date(),
      };
      this.$store.commit("addNote", payload);
      this.$router.push({ name: "Notes" });
      this.title = "";
      this.body = "";
      this.date = "";
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
