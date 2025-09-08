<template>
    <section class="email">
        <div class="container">
            <div class="email__content">
                <div class="email__text-content">
                    <h3 class="email__heading mb-3">Join the club and get the benefits</h3>
                    <p class="email__text">Sign up for our newsletter and receive exclusive offers on new
                        ranges,
                        sales, pop up stores and more</p>
                </div>
                <form class="email__form" action="">
                    <Input :placeholder="'your@email.com'" :type="'email'" />
                    <Button :text="'Sign up'" :variant="'dark'" />
                </form>
            </div>
        </div>
    </section>
</template>
<script setup>
import Input from '../Input.vue';
import Button from '../Button.vue';
</script>
<style scoped>
@import url(../../styles/join.css);
@media (max-width: 767px) {
    .email {
        padding: 0px;
    }

    .email__content {
        padding: 48px 0px 38px 0px;
    }

    .email__text-content {
        align-items: start;
    }

    .email__heading {
        font-size: 20px;
    }

    .email__text {
        font-size: 14px;
        text-align: start;
    }
}
</style>