<template>
    <div class="data">
        <h3>{{ title }}</h3>
        <p v-if="!inputs[fieldName]">{{ text }}</p>
        <input v-model="inputValue" @blur="handleBlur" @keyup.backspace="handleBackspace"
            @keydown.enter="handleEnterClick" v-focus type="text" :placeholder="placeholder" v-if="inputs[fieldName]">
        <div @click="toggleInput(fieldName)" class="edit-button">
            <img src="../../assets/profile/edit-button-svgrepo-com.svg" alt="">
        </div>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useAuthStore } from '../../store/auth'
const authStore = useAuthStore()
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true,
    },
    inputs: {
        type: Object,
        required: true
    },
    toggleInput: {
        type: Function,
        required: true
    },
    placeholder: {
        type: String,
        required: false,
    }
})
const emit = defineEmits(['update', 'delete']);
const fieldName = props.title.toLowerCase()
const inputValue = ref(authStore.userInfo?.[fieldName] || '');

watch(() => authStore.userInfo?.[fieldName], (newValue) => {
    inputValue.value = newValue || '';
});

function checkAndSubmitValues() {
    const currentValue = authStore.userInfo?.[fieldName] || ''
    const newValue = inputValue.value.trim()
    if (newValue === currentValue || newValue === '') {
        return;
    }
    emit('update', { field: fieldName, value: newValue })
}

const handleBlur = () => {
    checkAndSubmitValues()
}

const handleEnterClick = () => {
    checkAndSubmitValues()
    props.toggleInput(fieldName)
}

const handleBackspace = () => {
    if (inputValue.value === '') {
        emit('delete', fieldName)
    }
}

const vFocus = {
    mounted: (el) => {
        el.focus()
    },
}
</script>
<style scoped>
.data {
    display: flex;
    justify-content: space-between;
}

.data h3 {
    font-weight: 600;
}

.data input {
    width: 200px;
    min-height: 30px;
    border-radius: 5px;
    border: 1px solid #000;
    padding: 0 10px;
}

.edit-button {
    cursor: pointer;
    width: 20px;
}
</style>