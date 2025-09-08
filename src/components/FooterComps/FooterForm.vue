<template>
  <form action="" class="col-auto col-lg-6 col-md-6 col-sm-12">
    <h6 class="footer__form-heading">Join our mailing list</h6>
    <JoinForm variant="dark" />
  </form>
</template>
<script setup>
  import JoinForm from '../JoinForm.vue';
</script>
<style scoped>
  .footer__form-heading {
    font-family: 'Clash-Display';
    font-weight: 400;
    color: #ffffff;
    font-size: 16px;
    line-height: 100%;
    margin-bottom: 16px;
  }

  .footer__form-content {
    display: flex;
  }

  .footer__form-content input {
    flex-grow: 1;
  }
</style>
