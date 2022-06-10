<template>
  <div id="app">
    <div>{{result}}</div>
    <hr style="height: 10px; background-color: black;"/>
    <Hello-world></Hello-world>
  </div>
</template>

<script>
import axios from 'axios';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      result: ''
    }
  },
  created() {
    axios({
      url: 'http://152.136.185.210:7878/api/hy66/home/multidata'
    }).then(res => {
      console.log(res);
      this.result = res;
    });
  }
}
</script>

<style>

</style>
