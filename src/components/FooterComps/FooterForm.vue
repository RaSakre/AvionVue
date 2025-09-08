<template>
    <form action="" class="col-auto col-lg-6 col-md-6 col-sm-12">
        <h6 class="footer__form-heading">Join our mailing list</h6>
        <Input :variant="'dark'" :placeholder="'your@email.com'" :type="'email'"/>
        <Button :text="'Sign up'" />
    </form>
</template>
<script setup>
import Input from '../Input.vue';
import Button from '../Button.vue';
</script>
<style scoped>
.footer__form-heading {
    font-family: 'Clash-Display';
    font-weight: 400;
    color: #FFFFFF;
    font-size: 16px;
    line-height: 100%;
    margin-bottom: 16px;
}
</style>