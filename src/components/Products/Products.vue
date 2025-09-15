<template>
  <section :class="[sectionClass === 'new-ceramics' ? 'ceramics' : 'products']">
    <div class="container">
      <h3 class="product__heading mb-4">{{ heading }}</h3>
      <ul class="row row-gap-3 mb-4 gx-4">
        <template v-for="(product, index) in displayedProducts" :key="product.id">
          <li :class="columnsClass(index)">
            <ProductLink :product="product" :index="index" :columns="columns" />
          </li>
        </template>
      </ul>
      <div class="product__button-wrapper">
        <Button v-if="!isNeedToStop" @click="loadMore" :text="'View collection'" />
      </div>
    </div>
  </section>
</template>
<script setup>
import Button from '../UI/Button.vue';
import ProductLink from './ProductLink.vue';
import { computed, ref } from 'vue';
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  sectionClass: {
    type: String,
    required: true,
    default: 'products',
  },
  columns: {
    type: Number,
    required: false,
    default: 4,
  },
  columnFull: {
    type: Number,
    required: false,
    default: 0,
  },
  initialCount: {
    type: Number,
    required: false,
    default: 3,
  }
});


const visibleCount = ref(props.initialCount);
const displayedProducts = computed(() => {
  return props.products.slice(0, visibleCount.value);
})

const loadMore = () => {
  visibleCount.value += props.columns;
}

const isNeedToStop = computed(() => {
  return displayedProducts.value.length >= 12
})




const columnsClass = (index) => {
  if (props.columnFull) {
    return props.columnFull === index + 1 ? 'col-lg-6' : 'col-lg-3';
  } else {
    return props.columns === 4 ? 'col-lg-3' : 'col-lg-4';
  }
};
</script>
<style scoped>
.ceramics {
  padding: 80px 0px 60px 0px;
}

.product__heading {
  font-family: 'Clash-Display';
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  color: var(--mainColor);
}



.product__button-wrapper {
  display: flex;
  justify-content: center;
}

.products {
  padding: 64px 0px 48px 0px;
}


@media (max-width: 991px) {
  #product1 {
    display: none;
  }

  .products__img {
    height: auto;
  }
}

@media (max-width: 767px) {
  .ceramics {
    padding: 48px 0px 38px 0px;
  }

  .products {
    padding: 48px 0px 38px 0px;
  }
}

@media (max-width: 577px) {
  .ceramics__heading {
    font-size: 20px;
  }
}
</style>
