<template>
    <Notify />
    <header class="header">
        <div class="container">
            <HeaderUp />
            <HeaderDown />
        </div>
    </header>
</template>
<script setup>
import HeaderUp from '../components/HeadersComps/HeaderUp.vue';
import HeaderDown from '../components/HeadersComps/HeaderDown.vue';
import Notify from '../components/Notify.vue';

</script>
<style scoped>
.header {
    padding: 20px 28px;
}
</style>