<template>
    <Notify />
    <header class="header">
        <div class="container">
            <HeaderUp />
            <div class="header__down-content">
                <nav class="header__down-content-menu">
                    <ul class="header__menu-list">
                        <li class="header__menu-list-item">
                            <router-link to="/products" class="header__menu-list-link">Products</router-link>
                        </li>
                        <li class="header__menu-list-item">
                            <a class="header__menu-list-link" href="#">Ceramics</a>
                        </li>
                        <li class="header__menu-list-item">
                            <a class="header__menu-list-link" href="#">Tables</a>
                        </li>
                        <li class="header__menu-list-item">
                            <a class="header__menu-list-link" href="#">Chairs</a>
                        </li>
                        <li class="header__menu-list-item">
                            <a class="header__menu-list-link" href="#">Crockery</a>
                        </li>
                        <li class="header__menu-list-item">
                            <a class="header__menu-list-link" href="#">Tableware</a>
                        </li>
                        <li class="header__menu-list-item">
                            <a class="header__menu-list-link" href="#">Cutlery</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>
<script setup>
import HeaderUp from './HeaderUp.vue';
import Notify from '../components/UI/Notify.vue';

</script>
<style scoped>
.header {
    padding: 20px 28px;
}

.header__down-content {
    max-width: 675px;
    margin: 0 auto;
}

.header__menu-list {
    display: flex;
    justify-content: center;
    gap: 44px;
}

.header__menu-list-link {
    font-family: 'Satoshi';
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: var(--linksColor);
}

.open {
    display: flex !important;
}

@keyframes burgerAnimation {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@media (max-width: 767px) {
    .header__down-content-menu {
        display: none;
        flex-direction: column;
        height: 100%;
        width: 100%;
        position: fixed;
        inset: 0;
        z-index: 50;
        overflow-y: auto;
        padding: 50px 40px;
        background-color: rgb(143, 141, 141);
        animation: burgerAnimation 0.3s ease-in-out;
    }

    .header__down-content-menu .header__menu-list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .header__menu-list-link {
        color: black;
    }
}
</style>