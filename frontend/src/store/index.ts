import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nickname: '',
    username: '',
  },
  getters: {
    GTE_NICKNAME: state => {
      return state.nickname
    },
    GTE_USERNAME: state => {
      return state.username
    },
  },
  mutations: {
    SET_NICKNAME (state, nickname) {
      state.nickname = nickname
    },
    SET_USERNAME (state, username) {
      state.username = username
    },
  }
})
