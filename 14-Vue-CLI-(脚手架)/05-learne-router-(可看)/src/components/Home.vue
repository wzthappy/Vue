<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">信息</router-link>

    <router-view></router-view>

    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: "你好啊",
      path: '/home/news'
    };
  },
  created() {
    console.log("home created");
  },
  destroyed() {
    console.log("home destroyed");
  },
  activated() {    // 活跃状态时
    // console.log('activated');
    this.$router.push(this.path);
  },
  // deactivated() {
  //   // console.log('deactivated');
  //   console.log(this.$route.path);
  //   this.path = this.$route.path;
  // }
  beforeRouteLeave(to, from, next) {  // 导航离开时
    // console.log(this.$route.path);
    this.path = this.$route.path;
    next();
  }
};
</script>

<style>
</style>
