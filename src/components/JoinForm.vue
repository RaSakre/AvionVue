<template>
  <form @submit.prevent="handleSubmit" class="d-flex">
    <Input class="flex-grow-1" :variant="classes.input" :placeholder="placeholder" :type="'email'" />
    <Button :variant="classes.button" type="submit" :text="'Sign up'" />
  </form>
</template>

<script setup>
  import Input from '../components/Input.vue';
  import Button from '../components/Button.vue';

  const props = defineProps({
    variant: {
      type: String,
      default: 'light',
    },
    placeholder: {
      type: String,
      default: 'your@email.com',
    },
  });

  const classes = {
    input: props.variant === 'light' ? 'light' : 'dark',
    button: props.variant === 'light' ? 'dark' : 'light',
  };

  const handleSubmit = () => {
    console.log('submit');
  };
</script>
