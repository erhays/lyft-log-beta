import Vue from 'vue'
import Router from 'vue-router'
// import firebase from 'firebase'

import Login from '@/components/Login'
import History from '@/components/History'
import Add from '@/components/Add'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/history',
            name: 'History',
            component: History,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/add',
            name: 'Add',
            component: Add,
            meta: {
                requiresAuth: true
            }
        }
    ]
})

export default router