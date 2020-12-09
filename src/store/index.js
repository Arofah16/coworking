import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    penulis:'arofah',
    listIsi:[
      {
        fasilitas:"PUBLIC ROOM",
        orang:"20 ORANG",
        waktu:" 2 MINGGU",
        harga:" 600.000"
      }
    ]
  },
  mutations: {
    addSpace(state, data){
      state.listIsi.push(data)
    },
    DELETE_space(state,index){
      state.listIsi.splice(index,1)
    },
    EDIT_space(state,{index,data}){
        state.listIsi[index]=data;
        console.log(state.listIsi)
    },

  },
  actions: {
  },
  modules: {
  }
})

