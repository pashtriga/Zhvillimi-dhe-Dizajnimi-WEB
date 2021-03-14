import Vue from 'vue'
import Vuex from 'vuex'

import auth from './module/auth'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        auth
    },
    mutations:{
        setItems(state,{resource,items}){
            state[resource].items = items
        },
        setItem(state,{resource,item}){
            state[resource].item = item
        }
    }
})