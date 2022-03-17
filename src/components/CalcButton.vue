<script setup>
import { ref } from "vue";
const props = defineProps({
  label: String,
  area: String,
});

const styleObject = ref({
  "grid-area": props.area,
});
</script>

<template>
  <button v-bind:style="styleObject">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  color: var(--calc-secondary-text-color);
  border: 2px solid var(--calc-border-color);
  font-size: 24px;
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
  background-color: var(--calc-secondary-bg-color);
}
</style>
