import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        getMenuItems: [],
        currentUser: '',
        isLogin: false
    },
    mutations: {
        getMenus: function (state, data) {
            state.getMenuItems = data
        },
        addMenu: function (state, data) {
            state.getMenuItems.push(data)
        },
        setUser: function(state, user){
            if(user){
                state.isLogin = true;
                state.currentUser = user
            }else{
                state.isLogin = false;
                state.currentUser = null
            }
        }

    }

})
