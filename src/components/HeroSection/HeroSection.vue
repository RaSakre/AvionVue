<template>
    <section class="hero-section">
        <div class="container">
            <div class="row g-0">
                <div class="col-lg-7 col-md-6">
                    <div class="hero-section__left">
                        <div class="hero-section__left-top">
                            <h1 class="hero-section__title">The furniture brand for the future, with timeless
                                designs</h1>
                        </div>
                        <div class="hero-section__left-bottom">
                            <Button :text="'View collection'" :variant="'lightDark'" />
                            <p class="hero-section__text">A new era in eco friendly furniture with Avelon, the
                                French luxury
                                retail brand
                                with nice fonts, tasteful colors and a beautiful way to display things digitally
                                using modern web technologies.</p>
                        </div>
                    </div>
                </div>
                <div class="hero-section__right col-md-6 col-lg-5">
                    <img class="hero-section__img" src="../../assets/herosection/Right Image.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import Button from '../Button.vue';
</script>
<style scoped>
@import url(../../styles/hero-section.css);
@media (max-width:991px) {
    .hero-section__left {
        padding: 40px 24px 24px;
    }
}
@media (max-width: 767px) {
    .hero-section {
        padding: 0px;
    }
    .hero-section__left {
        padding: 40px 24px 24px;
    }
    .hero-section__right {
        display: none;
    }
}
</style>