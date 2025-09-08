<template>
    <section class="about">
        <div class="container container__p-0">
            <div class="about__content">
                <div class="about__left-content">
                    <div class="about__left-content-top">
                        <h3 class="about__heading">From a studio in London to a global brand with over 400
                            outlets</h3>
                        <p class="about__text">When we started Avion, the idea was simple. Make high quality
                            furniture
                            affordable and available for the mass market. </p>
                        <p class="about__text">Handmade, and lovingly crafted furniture and homeware is what we
                            live,
                            breathe and design so our Chelsea boutique become the hotbed for the London interior
                            design
                            community.</p>
                    </div>
                    <Button :text="'Get in touch'" />
                </div>
                <div class="about__right">
                    <img class="about__img" src="../../assets/about/Image.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import Button from '../Button.vue';
</script>
<style scoped>
@import url(../../styles/about.css);
@media (max-width: 991px) {
    .about__left-content {
        padding: 25px;
    }
}

@media (max-width: 767px) {
    .about__content {
        flex-direction: column;
    }

    .about__left-content {
        padding: 48px 15px 38px;
        gap: 64px;
    }


    .about__button {
        width: 100%;
    }

    .about__heading {
        max-width: 274px;
    }
}
</style>