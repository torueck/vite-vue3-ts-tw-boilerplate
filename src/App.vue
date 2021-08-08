<template>
  <img class="mx-auto mt-16" alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Vue 3 + TypeScript + Tailwind + Vite " />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
});
</script>
