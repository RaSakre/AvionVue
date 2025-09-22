<template>
    <section class="advantages">
        <div class="container">
            <h2 class="advantages__title mb-5 text-center">What makes our brand different</h2>
            <ul class="row row-gap-5">
                <li v-for="item in advantages" :key="item.id" class="advantages__item col-12 col-md-6 col-lg-3">
                    <img class="advantages__img" :src="item.img" :alt=item.iconAlt>
                    <h5 class="advantages__heading">{{ item.heading }}</h5>
                    <p class="advantages__text">{{ item.text }}</p>
                </li>
            </ul>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid'
import checkMark from "@/assets/advantages/Checkmark--outline.svg"
import delivery from "@/assets/advantages/Delivery.svg"
import purchase from "@/assets/advantages/Purchase.svg"
import sprout from "@/assets/advantages/Sprout.svg"
const advantages = ref([
    {
        id: uuidv4(),
        img: checkMark,
        iconAlt: "checkmark",
        heading: "Made by true artisans",
        text: "Handmade crafted goods made with real passion and craftmanship"
    },
    {
        id: uuidv4(),
        img: delivery,
        iconAlt: "delivery",
        heading: "Next day as standard",
        text: "Order before 3pm and get your order the next day as standard"
    },
    {
        id: uuidv4(),
        img: purchase,
        iconAlt: "purchase",
        heading: "Unbeatable prices",
        text: "For our materials and quality you won’t find better prices anywhere"
    },
    {
        id: uuidv4(),
        img: sprout,
        iconAlt: 'sprout',
        heading: "Recycled packaging",
        text: 'We use 100% recycled packaging to ensure our footprint is manageable',
    }
])
</script>
<style scoped>
.advantages {
    padding: 60px 0px;
}

.advantages__title {
    font-family: 'Clash-Display';
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    color: var(--mainColor);
}

.advantages__img {
    margin-bottom: 16px;
}

.advantages__heading {
    font-family: 'Clash-Display';
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: var(--mainColor);
    margin-bottom: 8px;
}

.advantages__text {
    font-family: 'Satoshi';
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--mainColor);
}

@media (max-width: 767px) {
    .advantages {
        padding: 48px 0px;
    }
}
</style>