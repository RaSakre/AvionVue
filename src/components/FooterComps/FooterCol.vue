<template>
    <div :id="swap ? 'footer__column' : null" class="col-auto col-sm-4 col-md-4 col-lg-2">
        <h6 class="footer__list-heading">{{ heading }}</h6>
        <ul class="footer__list">
            <li v-for="item, index in listItems" :key="index" class="footer__list-item">
                <a class="footer__link" href="#">{{ item }}</a>
            </li>
        </ul>
    </div>
</template>
<script setup>
const props = defineProps({
    heading: {
        type: String,
        required: true
    },
    listItems: {
        type: Array,
        required: true
    },
    swap: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>
<style scoped>
.footer__list-heading {
    font-family: 'Clash-Display';
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 100%;
    margin-bottom: 12px;
}

.footer__list-item:not(:last-child) {
    margin-bottom: 12px;
}

.footer__link {
    font-family: 'Satoshi';
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #FFFFFF;
}
@media (max-width: 463px) {
    #footer__column {
        order: -1;
    }
}
</style>