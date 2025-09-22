<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-section__content">
        <h1 class="hero-section__title">All products</h1>
      </div>
      <div class="select-filters">
        <select class="form-select" aria-label="Default select example">
          <option selected>Filters</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select class="form-select" aria-label="Default select example">
          <option selected>Sorting</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  </section>
  <section class="products">
    <div class="container">
      <div class="row mt-5">
        <ProductsFilerts @onFilter="onFilter" @filterPrice="filterPrice" />
        <div class="col-lg-9">
          <ul class="products__list-items">
            <li v-for="(product, index) in productsStore.displayFilteredProducts" :key="product.id">
              <ProductCard :product="product" :index="index" :columns="9" />
            </li>
            <p style="font-size: 30px" v-if="productsStore.noFound">No products found</p>
          </ul>
          <div class="text-center mt-5 mb-5">
            <Button v-if="!productsStore.isMaxLimit" @click="loadMore(20)" :text="'Load more'" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
  import ProductsFilerts from '../components/Products/ProductsFilerts.vue';
  import ProductCard from '../components/Products/ProductCard.vue';
  import Button from '../components/UI/Button.vue';
  import {useProductsStore} from '../store/product';
  import {ref, watch} from 'vue';

  const search = ref('');

  const productsStore = useProductsStore();

  const onFilter = (categoryUrl) => {
    productsStore.filterByCategory(categoryUrl);
  };

  const filterPrice = (min, max) => {
    productsStore.filterByPrice(min, max);
  };

  const loadMore = (loadValue) => {
    productsStore.loadMoreProducts(loadValue);
  };

  const debounce = (func, delay) => {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const onSearch = () => {
    productsStore.filters.search = search.value;
    productsStore.fetchProducts();
  };

  const debouncedSearch = debounce(onSearch, 500);



</script>
<style scoped>
  .hero-section__content {
    display: flex;
    padding: 0px 0px 36px 80px;
    align-items: end;
    background-image: url(../assets/all-products/listback.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 209px;
  }

  .hero-section__title {
    font-family: 'Clash-Display';
    font-size: 36px;
    line-height: 140%;
    color: #ffffff;
  }

  .hero-section__buttons {
    display: none;
    gap: 16px;
    justify-content: center;
    padding: 20px 0px;
  }

  .select-filters {
    display: none;
  }

  .products {
    padding: 0px 0px 20px 0px;
  }

  .products__list-items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 36px;
    margin-bottom: 32px;
  }

  @media (min-width: 320px) and (max-width: 991px) {
    .select-filters {
      display: flex;
      justify-content: center;
      padding: 20px 40px;
      gap: 20px;
    }

    .select-filters select {
      width: fit-content;
    }
  }
</style>
