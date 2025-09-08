import { createWebHistory, createRouter } from 'vue-router'
import Index from '../pages/Index.vue'
import Product from '../pages/ProductPage.vue'

const routes = [
    { path: '/', component: Index },
    {path: '/product', component: Product }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router