<script setup>
import Calculator from "./components/Calculator.vue";
</script>

<template>
  <Calculator />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Tomorrow&display=swap");

:root {
  --calc-primary-bg-color: #dbdbdb;
  --calc-secondary-bg-color: #afafaf;
  --calc-primary-text-color: #121212;
  --calc-secondary-text-color: #1d1d1d;
  --calc-border-color: #2e2e2e;
  --calc-error-color: #d60000;
}

body {
  background-color: #fefefe;
}

#app {
  font-family: "Tomorrow", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
