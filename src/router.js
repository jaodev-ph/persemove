import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            component: () =>
                import ('@/views/landing/Index'),
            children: [{
                name: 'Home',
                path: '/',
                component: () =>
                    import ('@/views/landing/Home.vue')
            }, ]
        },
        {
            name: 'Login',
            path: '/login',
            component: () =>
                import ('@/Login'),
        },
        {
            name: 'Register',
            path: '/register',
            component: () =>
                import ('@/Register'),
        },
        {
            name: 'Sys',
            path: '/sys',
            component: () =>
                import ('@/views/sys/Index.vue'),
        }
    ]
})


export default router