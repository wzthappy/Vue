<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link> -->
    <!-- <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->

    <!-- <button @click="homeClick">首页</button> -->
    <!-- <button @click="aboutClick">关于</button> -->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link :to="'/user/' + userId">用户</router-link> -->
    <!-- <router-link to="/profile">档案</router-link> -->
    <!-- <router-link :to="{path: '/profile', query: {name: 'xsy', age: 18, h: 1.66}}">档案</router-link> -->
    
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <keep-alive exclude="User">
      <router-view/>
    </keep-alive>
</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: 'zhangsan',
      imgURL: 'http://www.baidu.com/logo.png'
    }
  },
  methods: {
    userClick() {
      this.$router.push('/user/' + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'xsy',
          age: 18,
          h: 1.66
        }
      });
    },
    // homeClick() {
    //   this.$router.push('/home');
    //   console.log('homeClick');
    // },
    // aboutClick() {
    //   this.$router.push('/about');
    //   console.log('aboutClick');
    // }
  }
};
</script>

<style>
.router-link-active {
  color: #f00;
}
</style>
