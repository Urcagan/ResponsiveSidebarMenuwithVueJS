import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Home.vue'),
            name: 'home'
        },
        {
            path: '/about',
            component: () => import('../views/About.vue'),
            name: 'about'
        },
    ]
})

export default router