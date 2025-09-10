import { createWebHistory, createRouter } from 'vue-router'
import Index from '../pages/Index.vue'
import ProductPage from '../pages/ProductPage.vue'
import BasketPage from '../pages/BasketPage.vue'
import AllProductsPage from '../pages/AllProductsPage.vue'

const routes = [
    { path: '/', component: Index },
    {path: '/product', component: ProductPage},
    {path: '/product/:id', component: ProductPage},
    {path: '/basket', component: BasketPage},
    {path: '/all-products', component: AllProductsPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router