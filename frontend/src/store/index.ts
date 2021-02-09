import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nickname: '',
  },
  getters: {
    GTE_NICKNAME: state => {
      return state.nickname
    },
  },
  mutations: {
    SET_NICKNAME (state, nickname) {
      state.nickname = nickname
    },
  }
})
