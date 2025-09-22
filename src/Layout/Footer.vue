<template>
    <footer class="footer">
        <div class="container">
            <div id="footer__row" class="row row-gap-5">
                <div class="col-auto col-sm-4 col-md-4 col-lg-2">
                    <h6 class="footer__list-heading">Menu</h6>
                    <ul class="footer__list">
                        <li class="footer__list-item">
                            <a class="footer__link" href="#">New arrivals</a>
                        </li>
                        <li class="footer__list-item">
                            <a class="footer__link" href="#">Best sellers</a>
                        </li>
                        <li class="footer__list-item">
                            <a class="footer__link" href="#">Recently viewed</a>
                        </li>
                        <li class="footer__list-item">
                            <a class="footer__link" href="#">Popular this week</a>
                        </li>
                        <li class="footer__list-item">
                            <a class="footer__link" href="#">All products</a>
                        </li>
                    </ul>
                </div>
                <div id="footer__column" class="col-auto col-sm-4 col-md-4 col-lg-2">
                    <h6 class="footer__list-heading">Categories</h6>
                    <ul class="footer__list">
                        <li class="footer__list-item">
                            <a class="footer__link" href="#">Crockery</a>
                        </li>
                        <li class="footer__list-item">
                            <a class="footer__link" href="#">Furniture</a>
                        </li>
                        <li class="footer__list-item">
                            <a class="footer__link" href="#">Homeware</a>
                        </li>
                        <li class="footer__list-item">
                            <a class="footer__link" href="#">Plant pots</a>
                        </li>
                        <li class="footer__list-item">
                            <a class="footer__link" href="#">Chairs</a>
                        </li>
                        <li class="footer__list-item">
                            <a class="footer__link" href="#">Crockery</a>
                        </li>
                    </ul>
                </div>
                <div class="col-auto col-sm-4 col-md-4 col-lg-2">
                    <h6 class="footer__list-heading">Our company</h6>
                    <ul class="footer__list">
                        <li class="footer__list-item">
                            <a class="footer__link" href="#">About us</a>
                        </li>
                        <li class="footer__list-item">
                            <a class="footer__link" href="#">Vacancies</a>
                        </li>
                        <li class="footer__list-item">
                            <a class="footer__link" href="#">Contact us</a>
                        </li>
                        <li class="footer__list-item">
                            <a class="footer__link" href="#">Privacy</a>
                        </li>
                        <li class="footer__list-item">
                            <a class="footer__link" href="#">Returns policy</a>
                        </li>
                    </ul>
                </div>
                <div action="" class="col-auto col-lg-6 col-md-6 col-sm-12">
                    <h6 class="footer__form-heading">Join our mailing list</h6>
                    <JoinForm variant="dark" />
                </div>
            </div>
            <div class="footer__copyright">
                <p class="footer__copyright-text">Copyright 2025 Avion LTD</p>
                <div class="footer__copyright-links">
                    <a class="footer__copyright-link" href="#">
                        <img src="../assets/footerIcons/linkedin.svg" alt="">
                    </a>
                    <a class="footer__copyright-link" href="#">
                        <img src="../assets/footerIcons/facebook.svg" alt="">
                    </a>
                    <a class="footer__copyright-link" href="#">
                        <img src="../assets/footerIcons/instagram.svg" alt="">
                    </a>
                    <a class="footer__copyright-link" href="#">
                        <img src="../assets/footerIcons/skype.svg" alt="">
                    </a>
                    <a class="footer__copyright-link" href="#">
                        <img src="../assets/footerIcons/twitter.svg" alt="">
                    </a>
                    <a class="footer__copyright-link" href="#">
                        <img src="../assets/footerIcons/pinterest.svg" alt="">
                    </a>

                </div>
            </div>
        </div>
    </footer>
</template>
<script setup>
import JoinForm from '@/components/Sections/Join/JoinForm.vue';
</script>
<style scoped>
.footer {
    padding: 58px 0px 22px 0px;
    background: var(--footerBgColor);
}

.footer__list-heading {
    font-family: 'Clash-Display';
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 100%;
    margin-bottom: 12px;
}

.footer__list-item:not(:last-child) {
    margin-bottom: 12px;
}

.footer__link {
    font-family: 'Satoshi';
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #FFFFFF;
}

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

@media (max-width: 463px) {
    #footer__column {
        order: -1;
    }
}

.footer__copyright {
    position: relative;
    margin-top: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer__copyright::before {
    content: '';
    position: absolute;
    top: -24px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #4E4D93;
}

.footer__copyright-text {
    font-family: 'Satoshi';
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #FFFFFF;
}

.footer__copyright-links {
    display: flex;
    gap: 24px;
    align-items: center;
}

.footer__copyright-link {
    display: flex;
}

@media (max-width: 463px) {
    .footer__copyright-links {
        display: none;
    }

    .footer__copyright {
        justify-content: center;
    }
}
</style>