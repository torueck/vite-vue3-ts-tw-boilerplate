<template>
  <div class="text-center">
    <p>Example of two options how to reuse common components styles</p>
    <div>
      <ol class="list-decimal list-inside">
        <li>As a separate component (left button)</li>
        <li>As a global style (right button)</li>
      </ol>
    </div>

    <t-btn class="mt-4" @click="count--">Decrease</t-btn>
    <button class="mt-4 ml-2 btn" @click="count++">Increase</button>

    <div class="mt-2 font-semibold">count is: {{ count }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TBtn from './atoms/TBtn.vue';

const count = ref(0);
</script>

<script lang="ts">
// import { ref, defineComponent } from 'vue';
// import TBtn from './atoms/TBtn.vue';

// export default defineComponent({
//   name: 'HelloWorld',
//   components: {
//     TBtn,
//   },
//   setup: () => {
//     const count = ref(0);
//     return { count };
//   },
// });
</script>
