import { createStore } from 'vuex';

export default createStore({
  state: {
    darkTheme: true
  },
  mutations: {
    changeTheme(state) {
      state.darkTheme = !state.darkTheme
    }
  },
  actions: {},
  modules: {},
});
