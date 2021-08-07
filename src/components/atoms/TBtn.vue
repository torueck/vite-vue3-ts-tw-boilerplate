<template>
  <button
    class="
      px-4
      py-1
      text-sm text-green-600
      font-semibold
      rounded-md
      bg-white
      border border-green-400
      hover:text-white hover:bg-green-600 hover:border-transparent
    "
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TBtn',
});
</script>

<style scoped></style>
