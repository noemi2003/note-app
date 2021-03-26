<template>
  <div class="about">
    <input type="text" v-model="title"  />
    <textarea cols="30" rows="10" v-model="body"> </textarea>
    <div class="button">
      <button @click="del">消去</button>
      <button @click="save">保存</button>
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
      this.$store.commit("updateNote", payload);
      this.$router.push({ name: "Notes" });
    },

    del(){
      const payload = {
        id: this.id,
      };
      this.$store.commit("deleteNote", payload);
      this.$router.push({ name: "Notes" });
    }
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
