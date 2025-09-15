<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-overlay" @click.self="close">
        <div class="modal-content">
          <slot></slot>
          <button @click="close">Закрыть</button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
  defineProps({
    isOpen: Boolean,
  });

  const emit = defineEmits(['close']);

  const close = () => {
    emit('close');
  };
</script>

<style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    background: #ece8ef;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
  }

  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.3s ease;
  }

  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }

  .modal-enter-active .modal-content,
  .modal-leave-active .modal-content {
    transition: transform 0.3s ease;
  }

  .modal-enter-from .modal-content,
  .modal-leave-to .modal-content {
    transform: scale(0.7);
  }
</style>
