import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  getters: {
  },
  mutations: {
    add(state,obj){
      state.list.push({...obj})
    },
    serve(state,val){
      state.list[val.index].name=val.name
      state.list[val.index].status=val.status
      state.list[val.index].date=val.date
    }
  },
  actions: {
  },
  modules: {
  }
})
