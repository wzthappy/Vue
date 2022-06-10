export default {
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
}