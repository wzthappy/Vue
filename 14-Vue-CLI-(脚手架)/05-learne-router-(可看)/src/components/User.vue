<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息，嘿嘿嘿</p>
    <h2>{{ userId }}</h2>
    <h2>{{ $route.params.id }}</h2>

    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.id;
    },
  },
  methods: {
    btnClick() {
      console.log(this.$router);
      console.log(this.$route);
    },
  },
  // created() {
  //   console.log("created");
  //   document.title = "用户";
  // },
};
</script>

<style>
</style>