import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            name: 'Home',
            path: '/',
            component: () =>
                import ('@/views/landing/Index'),
            children: [{
                    path: '/',
                    component: () =>
                        import ('@/views/landing/Home.vue')
                },
                {
                    path: '/about',
                    component: () =>
                        import ('@/views/landing/About.vue')
                }
            ]
        },
        {
            name: 'system',
            path: '/system',
            component: () =>
                import ('@/Login'),
        }
    ]
})


export default router