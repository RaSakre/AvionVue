<template>
    <div class="footer__copyright">
        <p class="footer__copyright-text">Copyright 2022 Avion LTD</p>
        <div class="footer__copyright-links">
            <a v-for="icon, index in footerIcons" :key="index" class="footer__copyright-link" href="#">
                <img :src="icon.src" :alt="icon.name">
            </a>
            
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import linkedinIcon from '../../assets/footerIcons/linkedin.svg'
import facebookIcon from '../../assets/footerIcons/facebook.svg'
import instagramIcon from '../../assets/footerIcons/instagram.svg'
import twitterIcon from '../../assets/footerIcons/twitter.svg'
import pinterestIcon from '../../assets/footerIcons/pinterest.svg'
const footerIcons = ref([
        {
            name: 'Linkedin',
            src: linkedinIcon,
        },
        {
            name: 'Facebbok',
            src: facebookIcon,
        },
        {
            name: 'Instagram',
            src: instagramIcon,
        },
        {
            name: 'Twitter',
            src: twitterIcon,
        },
        {
            name: 'Pinterest',
            src: pinterestIcon,
        }
    ])
</script>
<style scoped>
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