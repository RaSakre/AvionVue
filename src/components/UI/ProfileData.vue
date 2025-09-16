<template>
    <div class="data">
        <h3>{{ title }}</h3>
        <p v-if="!inputs[title.toLowerCase()]">{{ text }}</p>
        <input @blur="handleBlur" @keydown.enter="handleEnterClick" v-focus type="text" placeholder="Location" v-if="inputs[title.toLowerCase()]">
        <div @click="toggleInput(title.toLowerCase())" class="edit-button">
            <img src="../../assets/profile/edit-button-svgrepo-com.svg" alt="">
        </div>
    </div>
</template>
<script setup>
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
})

const handleBlur = () => {
    console.log('blur');
    // FIREBASE LOGIC
}

const handleEnterClick = () => {
    console.log('enter');
    props.toggleInput(props.title.toLowerCase())
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