<template>
  <div class="text-center">
    <h1>{{ msg }}</h1>

    <p>
      Recommended IDE setup:
      <a
        href="https://code.visualstudio.com/"
        target="_blank"
        class="text-green-600"
        >VSCode</a
      >
      +
      <a
        href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
        target="_blank"
        class="text-green-600"
      >
        Vetur
      </a>
      or
      <a
        href="https://github.com/johnsoncodehk/volar"
        target="_blank"
        class="text-green-600"
        >Volar</a
      >
      (if using
      <code class="inline-code">&lt;script setup&gt;</code>)
    </p>

    <p>
      See
      <code class="inline-code">README.md</code>
      for more information.
    </p>

    <p>
      <a
        href="https://vitejs.dev/guide/features.html"
        target="_blank"
        class="text-green-600"
      >
        Vite Docs
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank" class="text-green-600"
        >Vue 3 Docs</a
      >
      |
      <a
        href="https://tailwindcss.com/docs"
        target="_blank"
        class="text-green-600"
        >Tailwind CSS Docs</a
      >
    </p>
    <p>
      Edit
      <code class="inline-code">components/HelloWorld.vue</code>
      to test hot module replacement.
    </p>
  </div>
  <counter-example class="mt-8"></counter-example>
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
import { defineProps } from 'vue';
import CounterExample from './CounterExample.vue';

const props = defineProps({
  msg: { type: String, required: true },
});
</script> -->

<script lang="ts">
import { defineComponent } from 'vue';
import CounterExample from './CounterExample.vue';

export default defineComponent({
  components: { CounterExample },
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
});
</script>
