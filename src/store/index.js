import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state, number) {
      state.count = state.count + number;
    },
    decrement(state) {
      state.count = state.count - 1;
    },
  },
  actions: {
    megaIncrement(context, msg) {
      alert(msg);
      context.commit("increment", 50);
      context.commit("decrement");
    },
  },
  getters: {
    tenMultiply(state) {
      return state.count * 10;
    },
  },
});

export default store;
