import { INCREMENT } from "./mutations-types";

export default {
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
}