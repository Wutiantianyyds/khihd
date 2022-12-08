import Vue from 'vue'
import Vuex from 'vuex'
import Pervuex from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [{
      name: "张三",
      id:0
    }, {
      name: "李四",
      id:1
    }]
  },
  getters: {},
  mutations: {
    add(state, obj) {
      state.list.push({
        ...obj,
        id:new Date().getTime()
      })
      console.log(state.list);
    },
    amend(state, obj) {
      state.list[obj.i].name = obj.name
      state.list[obj.i].phone = obj.phone
      state.list[obj.i].code = obj.code
      state.list[obj.i].money = obj.money
    },
    del(state,id){
      state.list = state.list.filter(item=>item.id !=id)
    }
  },
  actions: {},
  plugins:[Pervuex()],
  modules: {}
})