<template>
  <div :class="[isProductPage ? 'notify' : 'notify-hidden']">
    <div class="notify__center">
      <img src="../../assets/notify/car.svg" alt="" />
      <p class="notify__text">Free delivery on all orders over £50 with code easter checkout</p>
    </div>
    <img style="cursor: pointer" @click="handleClick" src="../../assets/notify/close.svg" alt="" />
  </div>
</template>
<script setup>
  import {ref, onMounted, watch} from 'vue';
  import {useRoute} from 'vue-router';
  const route = useRoute();
  const isProductPage = ref(false);
  // const showNotify = ref(false);

  // onMounted(() => {
  //   const isClosed = localStorage.getItem('notify') === 'closed';
  //   showNotify.value = !isClosed;
  // });

  const handleClick = () => {
    // showNotify.value = false;
    localStorage.setItem('notify', 'closed');
  };

  watch(
    () => route.path,
    (newPath) => {
      isProductPage.value = newPath.includes('/products');
    }
  );
</script>
<style scoped>
  .notify {
    background-color: #2a254b;
    display: flex;
    padding: 11px;
  }

  .notify__center {
    margin: 0 auto;
    display: flex;
    gap: 8px;
  }

  .notify__text {
    font-family: 'Satoshi';
    font-size: 14px;
    line-height: 100%;
    color: #ffffff;
  }

  .notify-hidden {
    display: none;
  }
</style>
