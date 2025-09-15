import { createWebHistory, createRouter } from 'vue-router'
import Index from '../pages/Index.vue'
import ProductPage from '../pages/ProductPage.vue'
import BasketPage from '../pages/BasketPage.vue'
import AllProductsPage from '../pages/AllProductsPage.vue'
import PaymentPage from '../pages/PaymentPage.vue'
import ProfilePage from '../pages/ProfilePage.vue'

const routes = [
    { path: '/', component: Index },
    {path: '/products', component: AllProductsPage},
    {path: '/products/:id', component: ProductPage},
    {path: '/basket', component: BasketPage},
    {path: '/payment', component: PaymentPage},
    {path: '/profile', component: ProfilePage},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router