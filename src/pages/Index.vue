<template>
  <section class="hero-section">
    <div class="container">
      <div class="row g-0">
        <div class="col-lg-7 col-md-6">
          <div class="hero-section__left">
            <div class="hero-section__left-top">
              <h1 class="hero-section__title">The furniture brand for the future, with timeless designs</h1>
            </div>
            <div class="hero-section__left-bottom">
              <router-link to="/products">
                <Button :text="'View collection'" :variant="'lightDark'" />
              </router-link>
              <p class="hero-section__text">
                A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts,
                tasteful colors and a beautiful way to display things digitally using modern web technologies.
              </p>
            </div>
          </div>
        </div>
        <div class="hero-section__right col-md-6 col-lg-5">
          <img class="hero-section__img" src="../assets/herosection/Right Image.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <Advantages />
  <Products :sectionClass="'new-ceramics'" :heading="'New Ceramics'" :columns="4"
    :products="productsStore.products.slice(0, 4)" />
  <Products :sectionClass="'products'" :heading="'Our popular products'" :columns="3"
    :products="productsStore.products.slice(0, 3)" />
  <Join />
  <section class="about">
    <div class="container container__p-0">
      <div class="about__content">
        <div class="about__left-content">
          <div class="about__left-content-top">
            <h3 class="about__heading">From a studio in London to a global brand with over 400
              outlets</h3>
            <p class="about__text">When we started Avion, the idea was simple. Make high quality
              furniture
              affordable and available for the mass market. </p>
            <p class="about__text">Handmade, and lovingly crafted furniture and homeware is what we
              live,
              breathe and design so our Chelsea boutique become the hotbed for the London interior
              design
              community.</p>
          </div>
          <Button :text="'Get in touch'" />
        </div>
        <div class="about__right">
          <img class="about__img" src="../assets/about/Image.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Advantages from '../components/Advantages/Advantages.vue';
import Products from '../components/Products/Products.vue';
import Join from '../components/Join/Join.vue';
import Button from '../components/Button.vue';
import { useProductsStore } from '../store/product';
const productsStore = useProductsStore();
</script>
<style scoped>
.hero-section {
  padding: 60px 0px;
}

.hero-section__left {
  display: flex;
  flex-direction: column;
  background: var(--heroBgColor);
  height: 100%;
  /* flex: 0 1 58.46%; */
  padding: 60px 0px 60px 60px;
  flex-wrap: nowrap;

}

.hero-section__left-top {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.hero-section__left-bottom {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  height: 100%;
  gap: 32px;
  justify-content: space-between;
}

.hero-section__title {
  font-family: 'Clash-Display';
  font-weight: 400;
  font-size: 32px;
  line-height: 140%;
  color: #fff;
  margin-bottom: 41px;
  text-shadow: 0px 4px 4px #000000;
}

.hero-section__button {
  padding: 16px 32px;
  background: rgba(249, 249, 249, 0.15);
  font-family: 'Satoshi';
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  line-height: 150%;
}

.hero-section__text {
  font-family: 'Satoshi';
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #FFFFFF;
  max-width: 602px;
}


.hero-section__img {
  width: 100%;
  object-fit: cover;
  height: 100%;
}

@media (max-width: 991px) {
  .hero-section__left {
    padding: 40px 24px 24px;
  }
}

@media (max-width: 767px) {
  .hero-section {
    padding: 0px;
  }

  .hero-section__left {
    padding: 40px 24px 24px;
  }

  .hero-section__right {
    display: none;
  }
}

@media (max-width: 991px) {
  .about__left-content {
    padding: 25px;
  }
}

.container__p-0 {
  padding: 0px 0px;
}

.about__content {
  display: flex;
}


.about__left-content {
  display: flex;
  flex-direction: column;
  flex: 0 1 50%;
  padding: 72px 100px 54px 84px;

}

.about__right {
  flex: 0 1 50%;
}

.about__left-content-top {
  max-width: 536px;
  flex-grow: 1;
}

.about__left-content-top>*:not(:last-child) {
  margin-bottom: 25px;
}

.about__heading {
  font-family: 'Clash-Display';
  font-weight: 400;
  font-size: 24px;
  color: var(--mainColor);
  line-height: 140%;
}

.about__text {
  font-family: 'Satoshi';
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: var(--mainColor);
}

.about__right-content {
  flex: 0 1 50%;
}

.about__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about__button {
  align-self: flex-start;
}

@media (max-width: 767px) {
  .about__content {
    flex-direction: column;
  }

  .about__left-content {
    padding: 48px 15px 38px;
    gap: 64px;
  }


  .about__button {
    width: 100%;
  }

  .about__heading {
    max-width: 274px;
  }
}
</style>
