<template>
    <div class="container">
        <div class="profile__wrapper">
            <div class="profile__content">
                <div class="profile__usernames">
                    <h2>Hello {{ authStore.userName }}!</h2>
                    <p>{{ authStore.userState?.email }}</p>
                </div>
                <hr>
                <div class="profile__data">
                    <ProfileData :inputs="inputs" :toggleInput="toggleInput" :title="'Name'" :text="'Your username'"/>
                    <ProfileData :inputs="inputs" :toggleInput="toggleInput" :title="'Email'" :text="'Your Email'"/>
                    <ProfileData :inputs="inputs" :toggleInput="toggleInput" :title="'Number'" :text="'Add number'"/>
                    <ProfileData :inputs="inputs" :toggleInput="toggleInput" :title="'Location'" :text="'Add location'"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useAuthStore } from '../store/auth';
import { ref } from 'vue';
import ProfileData from '../components/UI/ProfileData.vue';
const authStore = useAuthStore()
const inputs = ref({
    name: false,
    email: false,
    number: false,
    location: false,
})

const toggleInput = (inputName) => {
    inputs.value[inputName] = !inputs.value[inputName]
}
</script>
<style scoped>
.profile__usernames h2 {
    font-family: 'Satoshi';
    font-weight: 400;
    line-height: 100%;
    font-size: 30px;
}

.profile__usernames p {
    font-family: 'Satoshi';
    font-weight: 400;
    line-height: 100%;
    font-size: 20px;
}

.profile__data {
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 600px;
    padding: 15px 25px;
    background-color: #f0f5f9;
    font-size: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
}

</style>