import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

// axios.interceptors.response.use((res)=>{
//   console.log({
//     response:res
//   })
//   return res
// },(err)=>{
//   console.log({
//     error:err
//   })
// })

Vue.use(Vuex)
const ls = new SecureLS({ isCompression: true, encryptionSecret: 'ac-admin-ui' });

import modules from './modules'

const baseURL = process.env.VUE_APP_SERVER_DOMAIN

export default new Vuex.Store({
  modules,
  state: {
    _token: '',
    _alert: { type: 'error', msg: '' },
    _globalAlert: '',
    _navis: []
  },
  getters: {
    token(state) {
      return state._token
    },
    globalAlert(state) {
      return state._globalAlert
    },
    alert(state) {
      return state._alert;
    },
    navis(state) {
      return state._navis
    },
    isAuthed(state) {
      return state._token != ''
    }
  },
  mutations: {
    setToken(state, token) {
      state._token = token
    },
    setGlobalAlert(state, msg) {
      state._globalAlert = msg
    },
    setAlert(state, opts) {
      state._alert = opts
    },
    setNavis(state, navis) {
      state._navis = navis
    },

  },
  plugins: [createPersistedState({
    // storage: {
    //   getItem: (key) => ls.get(key),
    //   setItem: (key, value) => ls.set(key, value),
    //   removeItem: (key) => ls.remove(key),
    // },
  })]
})
