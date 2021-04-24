<template>
  <div class="texts">
    <p>{{ this.id }}</p>
    <input type="text" v-model="title" />
    <textarea name="" id="" cols="30" rows="10" v-model="body"></textarea>
    <div class="buttons">
      <button @click="save">保存する</button>
      <button @click="del">消去する</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  name: "NoteAdd",
  data() {
    return {
      title: "",
      body: "",
    };
  },
  computed: {
    note() {
      return this.$store.state.notes.find((n) => n.id === parseInt(this.id));
    },
  },
  created() {
    // 式 ? trueの場合の値 : falseの場合の値
    // this.title = this.note ? this.note.title : "";
    if (this.note) {
      this.title = this.note.title;
      this.body = this.note.body;
    } else {
      this.title = "";
      this.body = "";
    }
  },
  methods: {
    save() {
      const payload = {
        title: this.title,
        body: this.body,
        id: this.id,
      };
      this.$store.commit("updataNote", payload);
      this.$router.push({ name: "Notes" });
    },
    del() {
      const payload = {
        id: this.id,
      };
      this.$store.commit("delNote", payload);
      this.$router.push({ name: "Notes" });
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
textarea,
button {
  margin: 10px;
}

.buttons {
  display: flex;
}
</style>
