<template>
  <div id="app">
    <h2>----------App内容: modules中的内容-----------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpateName">异步修改</button>

    <h2>----------App内容: info对象的内容是否是响应式-----------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>----------App内容-----------</h2>
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>----------App内容: getters相关的信息-----------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more29stu}}</h2>
    <h2>{{$store.getters.more29stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(12)}}</h2>

    <h2>----------Hello Vuex内容-----------</h2>
    <Hello-vuex/>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex.vue";
import { INCREMENT } from "./store/mutations-types"

export default {
  name: "App",
  data() {
    return {
      message: "我是App组件"
    };
  },
  components: {
    HelloVuex
  },
  methods: {
    addition() {
      this.$store.commit(INCREMENT);
    },
    subtraction() {
      this.$store.commit('decrement');
    },
    addCount(count) {
      // 1. 普通的提交封装
      // this.$store.commit('incrementCount', count);

      // 2. 特殊的提交封装
      this.$store.commit({
        type: 'incrementCount',
        count,
        age: 17
      });
    },
    addStudent() {
      const stu = {id: 114, name: 'alan', age: 35}
      this.$store.commit('addStudent', stu);
    },
    updateInfo() {
      // this.$store.commit({
      //   type: 'updateInfo'
      // });

      // this.$store.dispatch('aUpdateInfo',{
      //   message: "我是携带的信息",
      //   success() {
      //     console.log("里面已经完成");
      //   }
      // });

      this.$store.dispatch('aUpdateInfo', "我是携带的信息").then(res => {
        console.log("里面完成了提交");
        console.log(res);
      });
    },
    updateName() {
      this.$store.commit('updateName', 'lisi');
    },
    asyncUpateName() {
      this.$store.dispatch('aUpdateName');
    }
  },
  // computed: {
  //   more29stu() {
  //     return this.$store.state.students.filter(s => s.age > 20)
  //   }
  // }
};
</script>

<style>
</style>
