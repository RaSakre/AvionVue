<template>
  <div class="header__down-content">
    <nav class="header__down-content-menu">
      <ul class="header__menu-list">
        <li class="header__menu-list-item">
          <router-link to="/product" class="header__menu-list-link">Product</router-link>
        </li>
        <li class="header__menu-list-item">
          <a class="header__menu-list-link" href="#">Tables</a>
        </li>
        <li class="header__menu-list-item">
          <a class="header__menu-list-link" href="#">Tables</a>
        </li>
        <li class="header__menu-list-item">
          <a class="header__menu-list-link" href="#">Chairs</a>
        </li>
        <li class="header__menu-list-item">
          <a class="header__menu-list-link" href="#">Crockery</a>
        </li>
        <li class="header__menu-list-item">
          <a class="header__menu-list-link" href="#">Tableware</a>
        </li>
        <li class="header__menu-list-item">
          <a class="header__menu-list-link" href="#">Cutlery</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup></script>
<style scoped>
  .header__down-content {
    max-width: 675px;
    margin: 0 auto;
  }

  .header__menu-list {
    display: flex;
    justify-content: center;
    gap: 44px;
  }

  .header__menu-list-link {
    font-family: 'Satoshi';
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: var(--linksColor);
  }

  .open {
    display: flex !important;
  }

  @keyframes burgerAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 767px) {
    .header__down-content-menu {
      display: none;
      flex-direction: column;
      height: 100%;
      width: 100%;
      position: fixed;
      inset: 0;
      z-index: 50;
      overflow-y: auto;
      padding: 50px 40px;
      background-color: rgb(143, 141, 141);
      animation: burgerAnimation 0.3s ease-in-out;
    }
    .header__down-content-menu .header__menu-list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .header__menu-list-link {
      color: black;
    }
  }
</style>
