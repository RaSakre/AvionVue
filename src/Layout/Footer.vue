<template >
    <footer class="footer">
        <div class="container">
            <div id="footer__row" class="row row-gap-5">
            <FooterCol :heading="'Menu'" :list-items="footerLinksText1"/>
            <FooterCol :swap="true" :heading="'Categories'" :list-items="footerLinksText2"/>
            <FooterCol :heading="'Our company'" :list-items="footerLinksText3"/>
            <FooterForm/>
            <FooterCopyrights/>
            </div>
        </div>
    </footer>
</template>
<script setup>
const footerLinksText1 = ['New Arrivals', 'Best sellers', 'Recently viewed', 'Popular this week', 'All products']
const footerLinksText2 = ['Crockery', 'Furniture', 'Homeware', 'Plant pots', 'Chairs', 'Crockery']
const footerLinksText3 = ['About us', 'Vacancies', 'Contact us', 'Privacy', 'Returns policy']
import FooterCol from '../components/FooterComps/FooterCol.vue';
import FooterForm from '../components/FooterComps/FooterForm.vue';
import FooterCopyrights from '../components/FooterComps/FooterCopyrights.vue';
</script>
<style scoped>
.footer {
    padding: 58px 0px 22px 0px;
    background: var(--footerBgColor);
}
</style>