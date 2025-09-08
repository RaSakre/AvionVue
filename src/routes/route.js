import { createWebHistory, createRouter } from 'vue-router'
import Index from '../pages/Index.vue'
import Products from '../pages/Products.vue'

const routes = [
    { path: '/', component: Index },
    {path: '/product', component: Products }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router