import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import {routes} from './router/index'
import {store} from './store/index'

import App from './App.vue'

Vue.use(VueRouter)

Vue.prototype.http = axios

axios.defaults.baseURL = 'http://localhost:3000/'

var router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
