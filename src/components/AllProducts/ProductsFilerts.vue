<template>
  <aside class="col-lg-3">
    <div class="filters__content">
      <div class="filters__column">
        <h5 class="filters__title">Product type</h5>
        <div class="filters__inputs">
          <label class="checkbox-label" v-for="category in categories" :key="category">
            <input type="radio" name="category" @change="emit('onFilter', category.url)" />
            <span class="custom-checkbox"></span>
            <p style="text-transform: capitalize;">{{ category.name }}</p>
          </label>
        </div>
      </div>
      <div class="filters__column">
        <h5 class="filters__title">Price</h5>
        <div class="filters__inputs">
          <label class="checkbox-label">
            <input class="visually-hidden checkmark" type="checkbox" />
            <span class="custom-checkbox"></span>
            <p>0 - 300</p>
          </label>
          <label class="checkbox-label">
            <input class="visually-hidden checkmark" type="checkbox" />
            <span class="custom-checkbox"></span>
            <p>300 - 1000</p>
          </label>
          <label class="checkbox-label">
            <input class="visually-hidden checkmark" type="checkbox" />
            <span class="custom-checkbox"></span>
            <p>1000 +</p>
          </label>
        </div>
      </div>
    </div>
  </aside>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const categories = ref([]);

const emit = defineEmits(['onFilter']);

onMounted( async() => {
    try {
        const response = await fetch('https://dummyjson.com/products/categories');
        const data = await response.json();
        categories.value = data;
    } catch (error) {
        console.log(error);
    }
})

</script>
<style scoped>
  @media (max-width: 992px) {
    aside {
      display: none;
    }
  }

  .filters__content {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  .filters__inputs {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: fit-content;
  }

  .filters__title {
    font-family: 'Clash-Display';
    color: #2a254b;
    font-size: 16px;
    line-height: 140%;
    margin-bottom: 20px;
  }

  .checkbox-label {
    display: flex;
    gap: 12px;
  }

  .custom-checkbox {
    position: relative;
    width: 16px;
    height: 16px;
    border: 1px solid #dcdcdc;
    cursor: pointer;
    border-radius: 2px;
  }

  .checkbox-label input[type='checkbox']:checked + .custom-checkbox {
    background-image: url(../../assets/all-products/checkmark.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-color: #4e4d93;
    width: 16px;
    height: 16px;
    border: none;
  }
</style>
