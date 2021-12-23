<template>
  <button
    class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md bg-blue-600 dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>
