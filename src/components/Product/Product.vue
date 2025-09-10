<template>
  <section class="product" v-if="product">
    <div class="container">
      <div class="product__wrapper">
        <div class="product__image">
          <img :src="product.thumbnail" :alt="product.title" />
        </div>
        <div class="product__content">
          <div class="product__about">
            <h1 class="product__title">{{ product.title }}</h1>
            <p class="product__price">{{ product.price + '$' }}</p>
          </div>
          <div class="product__description">
            <h6 class="description__title">Description</h6>
            <p class="description__text">{{ product.description }}</p>
            <ul class="description__list">
              <li class="description__item">Premium material</li>
              <li class="description__item">Handmade upholstery</li>
              <li class="description__item">Quality timeless classic</li>
            </ul>
          </div>
          <div class="product__dimensions" v-if="product">
            <h6 class="dimensions__title">Dimensions</h6>
            <div class="dimensions__metrics">
              <div class="metrics__height">
                <p class="metrics__title">{{ dimensionsValue[1][0] }}</p>
                <p class="metrics__value">{{ dimensionsValue[1][1] }}</p>
              </div>
              <div class="metrics__width">
                <p class="metrics__title">{{ dimensionsValue[0][0] }}</p>
                <p class="metrics__value">{{ dimensionsValue[0][1] }}</p>
              </div>
              <div class="metrics__depth">
                <p class="metrics__title">{{ dimensionsValue[2][0] }}</p>
                <p class="metrics__value">{{ dimensionsValue[2][1] }}</p>
              </div>
            </div>
          </div>
          <div class="product__amount">
            <div class="d-flex flex-column gap-2">
              <Quantity :amount="'Amount:'" :quantity="quantity" @onIncrement="increment" @onDecrement="decrement" :max="product.minimumOrderQuantity" />
            </div>
            <Button v-if="!isInBasket" :text="'Add to cart'" :variant="'dark'" @addToCart="addToCart" />
            <Button v-else :text="'Go to cart'" :variant="'light'" @addToCart="() => router.push('/basket')" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
  import {useRoute, useRouter} from 'vue-router';
  import {useProductsStore} from '../../store/product';
  import {useBasketStore} from '../../store/basket';
  import Quantity from '../Quantity.vue';
  import Button from '../Button.vue';
  import {ref, computed, onMounted, watch} from 'vue';

  const basketStore = useBasketStore();
  const route = useRoute();
  const router = useRouter();
  const product = ref(null);
  
  const dimensionsValue = computed(() => {
    if (!product.value || !product.value.dimensions) {
      return [];
    }
    return Object.entries(product.value.dimensions);
  });

  const quantity = ref(1);

  const increment = () => {
    if (quantity.value >= product.value.minimumOrderQuantity) return;
    quantity.value++;
  };

  const decrement = () => {
    if (quantity.value <= 1) return;
    quantity.value--;
  };

  const addToCart = () => {
    basketStore.addProduct(product.value, quantity.value);
  };

  const isInBasket = computed(() => {
    return basketStore.hasInBasket(product.value.id);
  });

  const fethcProduct = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${route.params.id}`);
      const data = await response.json();
      product.value = data;
    } catch (error) {
      console.log(error);
    }
  }

  onMounted(() => {
    fethcProduct()
  })

  // onMounted(() => {
  //     if (basketStore.hasInBasket(product.value.id)) {
  //         quantity.value = product.value.quantity;
  //     }
  // })
</script>
<style scoped>
  .product__wrapper {
    display: flex;
    gap: 62px;
  }

  .product__amount {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 972px) {
    .product__wrapper {
      flex-direction: column;
      gap: 0px;
    }
  }

  .product__image {
    flex: 0 1 50%;
  }

  .product__image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 972px) {
    .product__image img {
      height: 450px;
      width: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 672px) {
    .product__image {
      margin: 0px -15px;
    }

    .product__image img {
      height: 100%;
    }
  }

  .product__content {
    padding: 40px 40px 32px 40px;
    flex: 0 1 50%;
  }

  @media (max-width: 672px) {
    .product__content {
      padding: 28px 24px 46px 24px;
    }
  }

  .product__about {
    margin-bottom: 54px;
  }

  @media (max-width: 575px) {
    .product__about {
      margin-bottom: 20px;
    }
  }

  .product__title {
    font-size: clamp(1.5rem, 1.35rem + 0.75vw, 2.25rem);
    font-family: 'Clash-Display';
    line-height: 100%;
    color: var(--mainColor);
    margin-bottom: 13px;
  }

  .product__price {
    font-family: 'Satoshi';
    font-size: 24px;
    line-height: 100%;
    color: #12131a;
  }

  .product__description {
    margin-bottom: 35px;
  }

  .product .description__title {
    font-family: 'Clash-Display';
    font-size: 16px;
    line-height: 100%;
    color: var(--mainColor);
    margin-bottom: 16px;
  }

  .product .description__text {
    font-family: 'Satoshi';
    font-size: 16px;
    line-height: 100%;
    color: var(--mainColor);
    margin-bottom: 20px;
  }

  .product .description__list {
    padding-left: 30px;
  }

  .product .description__item {
    list-style: disc;
  }

  .product__dimensions {
    max-width: 241px;
    margin-bottom: 22px;
  }

  @media (max-width: 575px) {
    .product__dimensions {
      max-width: none;
      margin-bottom: 32px;
    }
  }

  .product .dimensions__title {
    font-family: 'Clash-Display';
    font-size: 16px;
    line-height: 100%;
    color: var(--mainColor);
    margin-bottom: 28px;
  }

  .product .dimensions__metrics {
    display: flex;
    justify-content: space-between;
  }

  .product .metrics__height {
    position: relative;
  }

  .product .metrics__width {
    position: relative;
  }

  .product .metrics__title {
    font-family: 'Clash-Display';
    font-size: 14px;
    line-height: 100%;
    color: var(--mainColor);
    margin-bottom: 12px;
  }

  .product .metrics__value {
    font-family: 'Satoshi';
    font-size: 16px;
    line-height: 100%;
    color: var(--mainColor);
  }
</style>
