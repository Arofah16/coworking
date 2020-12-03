import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isi:[
      {
        fsilitas:"",
        orang:"",
        waktu:"",
        harga:""
      }
    ]
  },
  mutations: {
    tambah(state){
      state.isi
    }
  },
  actions: {
  },
  modules: {
  }
})
