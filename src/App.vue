<template>
  <img class="mx-auto mt-16" alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Vue 3 + TypeScript + Tailwind + Vite " />
</template>

<!-- 
// ----------------------------------------------------------------------------------------
// If you want to use the `<script setup>` syntax instead of the regular composition API,
// comment out the following block and remove the regular `<script>` block below.
// Remember, that you might want to use Volar instead of Vetur in this case - see README
// for details.
// ---------------------------------------------------------------------------------------- 
-->
<!-- <script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue';
</script> -->

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  components: {
    HelloWorld,
  },
});
</script>
