<template>
  <div id="app">
    <router-view></router-view>
    <Main-tab-bar></Main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/MainTabBar.vue';

export default {
  name: "App",
  components: {
    MainTabBar
  },
};
</script>

<style>
</style>
