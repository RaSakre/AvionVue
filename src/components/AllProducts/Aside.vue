<template>
    <aside class="col-lg-3">
        <div class="filters__content">
            <div class="filters__column">
                <h5 class="filters__title">Product type</h5>
                <div class="filters__inputs">
                    <label class="checkbox-label">
                        <input class="visually-hidden checkmark" type="checkbox">
                        <span class="custom-checkbox"></span>
                        <p>Furniture</p>
                    </label>
                    <label class="checkbox-label">
                        <input class="visually-hidden checkmark" type="checkbox">
                        <span class="custom-checkbox"></span>
                        <p>Homeware</p>
                    </label>
                    <label class="checkbox-label">
                        <input class="visually-hidden checkmark" type="checkbox">
                        <span class="custom-checkbox"></span>
                        <p>Sofas</p>
                    </label>
                    <label class="checkbox-label">
                        <input checked class="visually-hidden checkmark" type="checkbox">
                        <span class="custom-checkbox"></span>
                        <p>Homeware</p>
                    </label>
                    <label class="checkbox-label">
                        <input class="visually-hidden checkmark" type="checkbox">
                        <span class="custom-checkbox"></span>
                        <p>Light fittings</p>
                    </label>
                    <label class="checkbox-label">
                        <input class="visually-hidden checkmark" type="checkbox">
                        <span class="custom-checkbox"></span>
                        <p>Accessories</p>
                    </label>
                </div>
            </div>
            <div class="filters__column">
                <h5 class="filters__title">Price</h5>
                <div class="filters__inputs">
                    <label class="checkbox-label">
                        <input class="visually-hidden checkmark" type="checkbox">
                        <span class="custom-checkbox"></span>
                        <p>0 - 300</p>
                    </label>
                    <label class="checkbox-label">
                        <input class="visually-hidden checkmark" type="checkbox">
                        <span class="custom-checkbox"></span>
                        <p>300 - 1000</p>
                    </label>
                    <label class="checkbox-label">
                        <input class="visually-hidden checkmark" type="checkbox">
                        <span class="custom-checkbox"></span>
                        <p>1000 +</p>
                    </label>
                </div>
            </div>
        </div>
    </aside>
</template>
<script setup>

</script>
<style scoped>
@media (max-width: 992px) {
    aside {
        display: none;
    }
}

.filters__content {
    display: flex;
    flex-direction: column;
    gap: 48px;
}

.filters__inputs {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: fit-content;
}

.filters__title {
    font-family: 'Clash-Display';
    color: #2A254B;
    font-size: 16px;
    line-height: 140%;
    margin-bottom: 20px;
}

.checkbox-label {
    display: flex;
    gap: 12px;
}

.custom-checkbox {
    position: relative;
    width: 16px;
    height: 16px;
    border: 1px solid #DCDCDC;
    cursor: pointer;
    border-radius: 2px;
}

.checkbox-label input[type="checkbox"]:checked+.custom-checkbox {
    background-image: url(../../assets/all-products/checkmark.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-color: #4E4D93;
    width: 16px;
    height: 16px;
    border: none;
}
</style>