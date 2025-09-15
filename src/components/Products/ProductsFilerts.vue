<template>
  <aside class="col-lg-3">
    <div class="filters__content">
      <div class="filters__column">
        <h5 class="filters__title">Product type</h5>
        <div class="filters__inputs">
          <label class="checkbox-label">
            <input type="radio" name="category" @change="$emit('onFilter', 'all')" />
            <p style="text-transform: capitalize">Show all</p>
          </label>
          <label class="checkbox-label" v-for="category in filters" :key="category">
            <input type="radio" name="category" @change="$emit('onFilter', category.url)" />
            <p style="text-transform: capitalize">{{ category.name }}</p>
          </label>
        </div>
      </div>
      <div class="filters__column">
        <h5 class="filters__title">Price</h5>
        <div class="filters__inputs">
          <label class="checkbox-label">
            <input name="price" type="radio" @change="$emit('filterPrice')" />
            <p>Reset</p>
          </label>
          <label class="checkbox-label">
            <input name="price" type="radio" @change="$emit('filterPrice', 1, 300)" />
            <p>0 - 300</p>
          </label>
          <label class="checkbox-label">
            <input name="price" type="radio" @change="$emit('filterPrice', 300, 1000)" />
            <p>300 - 1000</p>
          </label>
          <label class="checkbox-label">
            <input name="price" type="radio" @change="$emit('filterPrice', 1000, Infinity)" />
            <p>1000 +</p>
          </label>
        </div>
      </div>
    </div>
  </aside>
</template>
<script setup>
  import {onMounted, ref} from 'vue';

  const filters = ref([]);

  const emit = defineEmits(['onFilter', 'filterPrice']);

  const fetchFilters = async () => {
    const response = await fetch('https://dummyjson.com/products/categories');
    const data = await response.json();
    filters.value = data;
  };

  onMounted(() => {
    fetchFilters();
  });
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
</style>
