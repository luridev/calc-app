<script setup>
import { ref } from "vue";
const props = defineProps({
  value: String,
  message: String,
  name: String,
  isError: Boolean,
});

const styleObject = ref({
  "grid-area": props.name,
});
</script>

<template>
  <div v-bind:style="styleObject">
    <h2
      :class="[{ 'calc-error': isError }, 'calc-display', 'calc-value-display']"
    >
      {{ props.value ?? "_" }}
    </h2>
    <h3
      :class="[{ 'calc-error': isError }, 'calc-display', 'calc-info-display']"
    >
      {{ props.message ?? "ready" }}
    </h3>
  </div>
</template>

<style scoped>
.calc-display {
  text-align: right;
  margin: 0;
  padding: 5px;

  color: var(--calc-primary-text-color);
  background-color: var(--calc-primary-bg-color);
  border: 2px solid var(--calc-border-color);
}

.calc-value-display {
  font-size: 40px;

  border-radius: 5px 5px 0px 0px;
  border-bottom: none;
}

.calc-info-display {
  font-size: 20px;
  border-radius: 0px 0px 5px 5px;
}

.calc-error {
  color: var(--calc-error-color);
}
</style>
