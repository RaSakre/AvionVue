<template>
  <section :class="[sectionClass === 'new-ceramics' ? 'ceramics' : 'products']">
    <div class="container">
      <h3 class="ceramics__heading mb-4">{{ heading }}</h3>
      <ul class="row row-gap-3 mb-4">
        <template v-for="(product, index) in products" :key="product.id">
          <router-link
            v-if="index < columns"
            to="/product"
            :id="[product.title.includes('sofa') ? 'product1' : '']"
            :class="columnsClass(index)">
            <img class="ceramics__img" :src="product.img" :alt="product.alt" />
            <div class="ceramics__item-textcontent">
              <h6 class="ceramics__item-title">{{ product.title }}</h6>
              <p class="ceramics__item-price">{{ product.price }}</p>
            </div>
          </router-link>
        </template>
      </ul>
      <div class="ceramics__button-wrapper">
        <Button :text="'View collection'" />
      </div>
    </div>
  </section>
</template>
<script setup>
  import Button from '../Button.vue';
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
  });

  const columnsClass = (index) => {
    if (props.columnFull) {
      return props.columnFull === index + 1 ? 'col-lg-6' : 'col-lg-3';
    } else {
      return props.columns === 4 ? 'col-lg-3' : 'col-lg-4';
    }
  };
</script>
<style scoped>
  @import url(../../styles/ceramics.css);

  .products {
    padding: 64px 0px 48px 0px;
  }

  .products__heading {
    font-family: 'Clash-Display';
    font-weight: 400;
    font-size: 32px;
    line-height: 140%;
    color: var(--mainColor);
  }

  .products__img {
    width: 100%;
    height: 375px;
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
