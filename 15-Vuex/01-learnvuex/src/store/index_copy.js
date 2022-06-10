import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from "./mutations-types";

// 1. 安装插件
Vue.use(Vuex)

// 创建对象
const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', "wanwu");
      }, 1000);
    }
  },
  getters: {
    fullname(state) {
      return state.name + '1111';
    },
    fullname2(state, getters) {
      return getters.fullname + '222222';
    },
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter;
    }
  }
}

// 2. 创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      { id: 110, name: 'wzt', age: 19 },
      { id: 111, name: 'kobe', age: 24 },
      { id: 112, name: 'james', age: 30 },
      { id: 113, name: 'curry', age: 10 }
    ],
    info: {
      name: 'kobe',
      age: 40,
      height: 1.98
    }
  },
  mutations: {
    // 方法
    [INCREMENT](state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementCount(state, payload) {
      // state.counter += count;
      // console.log(payload);
      state.counter += payload.count;
    },
    addStudent(state, stu) {
      state.students.push(stu);
    },
    updateInfo(state) {
      state.info.name = 'coderwhy'

      // setTimeout(() => {  // 错误代码: 不能在这里进行异步操作
      //   state.info.name = 'coderwhy'
      // }, 1000);
      // state.info['address'] = '洛杉矶'

      // Vue.set(state.info, 'address', '洛杉矶');
      // delete state.info.age;
      // Vue.delete(state.info, 'age');
    }
  },
  actions: {
    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo');
    //     console.log(payload.message);
    //     payload.success()
    //   }, 1000);
    // }

    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo');
          console.log(payload);
          resolve("111");
        }, 1000);
      });
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter;
    },
    more29stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    more29stuLength(state, getters) {
      return getters.more29stu.length;
    },
    moreAgeStu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {
    a: moduleA,
    b: {

    },
  }
});

// 3. 导出store对象
export default store




const obj = {
  name: 'wzt',
  age: 18,
  height: 1.76
}

const { name, age, height } = obj;
console.log(name, age, height);