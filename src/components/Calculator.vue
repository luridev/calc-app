<script setup>
import CalcButton from "./CalcButton.vue";
import CalcDisplay from "./CalcDisplay.vue";
import { calcMath, calcMemory } from "./CalcMath.js";
import { ref, computed } from "vue";

let displayValue = ref(null);
let displayMessage = ref(null);

const isDisplayEmpty = computed(() => displayValue.value === null);

let operand1 = null;
let operand2 = null;
let operator = null;

let calculated = false;
let calcError = ref(false);

const numbers = new Map([
  ["number9", "9"],
  ["number8", "8"],
  ["number7", "7"],
  ["number6", "6"],
  ["number5", "5"],
  ["number4", "4"],
  ["number3", "3"],
  ["number2", "2"],
  ["number1", "1"],
  ["number0", "0"],
]);

const operators = new Map([
  ["addition", "+"],
  ["subtraction", "-"],
  ["multiplication", "*"],
  ["division", "÷"],
  ["calculate", "="],

  ["backspace", "←"],
  ["sign", "±"],
  ["sqrt", "√"],
  ["power", "x²"],
  ["separator", "."],

  ["clearAll", "AC"],
]);

const memories = new Map([
  ["memoryIncrease", "M+"],
  ["memoryDecrease", "M-"],
  ["memorySave", "MS"],
  ["memoryRead", "MR"],
  ["memoryClear", "MC"],
]);

function clearAll() {
  operand1 = null;
  operand2 = null;
  operator = null;
  calculated = false;
  displayValue.value = null;
  displayMessage.value = null;
}

function getNumberFromDisplay() {
  const temp = Number(displayValue.value);
  return Number.isNaN(temp) ? 0 : temp;
}

function errorHandler(e) {
  clearAll();
  displayMessage.value = e.message;
  displayValue.value = "Error";
  calcError.value = true;
  console.log("calcError is ", calcError.value);
}

function calculate() {
  switch (operator) {
    case operators.get("addition"):
      operand1 = calcMath.addition(operand1, operand2);
      break;
    case operators.get("subtraction"):
      operand1 = calcMath.subtraction(operand1, operand2);
      break;
    case operators.get("multiplication"):
      operand1 = calcMath.multiplication(operand1, operand2);
      break;
    case operators.get("division"):
      operand1 = calcMath.division(operand1, operand2);
      break;
  }
}

function signHandler() {
  if (isDisplayEmpty.value) {
    displayValue.value = "-";
  } else {
    displayValue.value = (-getNumberFromDisplay()).toString();
  }
}

function sqrtHandler() {
  if (isDisplayEmpty.value) return;

  const tmp = getNumberFromDisplay();
  displayValue.value = calcMath.sqrt(tmp).toString();
  displayMessage.value = `Sqrt (${tmp}) = ${displayValue.value}`;
}

function pwrHandler() {
  if (isDisplayEmpty.value) return;

  const tmp = getNumberFromDisplay();
  displayValue.value = calcMath.multiplication(tmp, tmp).toString();
  displayMessage.value = `(${tmp})² = ${displayValue.value}`;
}

function sepHandler() {
  if (isDisplayEmpty.value) {
    displayValue.value = "0.";
  } else {
    if (!displayValue.value.includes(operators.get("separator"))) {
      displayValue.value = `${displayValue.value}.`;
      calculated = false;
    }
  }
}

function backspaceHandler() {
  if (isDisplayEmpty.value) return;

  displayValue.value = displayValue.value.slice(0, -1);
  if (displayValue.value === "-" || displayValue.value === "") {
    displayValue.value = null;
  }
}

function numbersHandler(num) {
  if (calculated) {
    displayValue.value = num;
    calculated = false;
  } else {
    displayValue.value = `${displayValue.value ?? ""}${num}`;
  }
}

function operatorsHandler(op) {
  if (operand1 === null) {
    operand1 = getNumberFromDisplay();
    operator = op;
    displayMessage.value = `${operand1} ${operator}`;
    displayValue.value = null;
  } else {
    operand2 = getNumberFromDisplay();
    calculate();
    operator = op;
    displayMessage.value = `${operand1} ${operator}`;
    displayValue.value = null;
    operand2 = null;
  }
}

function calcHandler() {
  if (operand1 === null) {
    operand1 = getNumberFromDisplay();
    displayMessage.value = `${operand1} =`;
  } else {
    operand2 = getNumberFromDisplay();
    displayMessage.value = `${operand1} ${operator} ${operand2}`;
    calculate();
    displayMessage.value = `${displayMessage.value} = ${operand1}`;
    displayValue.value = operand1.toString();
    calculated = true;
    operand2 = null;
    operand1 = null;
  }
}

const actions = {
  backspace: backspaceHandler,
  sign: signHandler,
  sqrt: sqrtHandler,
  power: pwrHandler,
  calculate: calcHandler,
  addition: operatorsHandler,
  subtraction: operatorsHandler,
  multiplication: operatorsHandler,
  division: operatorsHandler,
  separator: sepHandler,
  clearAll: clearAll,
  memoryRead: () => (displayValue.value = calcMemory.get().toString()),
  memoryClear: () => calcMemory.clear(),
  memorySave: () => calcMemory.set(getNumberFromDisplay()),
  memoryIncrease: () => calcMemory.increase(getNumberFromDisplay()),
  memoryDecrease: () => calcMemory.decrease(getNumberFromDisplay()),
};

const handler = (event) => {
  if (calcError.value) {
    if (operators.get(event.target.id) === operators.get("clearAll")) {
      clearAll();
      calcError.value = false;
    } else {
      return;
    }
  }

  if (numbers.has(event.target.id)) {
    numbersHandler(numbers.get(event.target.id));
  }

  if (operators.has(event.target.id)) {
    const op = operators.get(event.target.id);
    try {
      actions[event.target.id](op);
    } catch (e) {
      errorHandler(e);
    }
  }

  if (memories.has(event.target.id)) {
    actions[event.target.id]();
  }
};
</script>

<template>
  <div class="calc-container">
    <CalcDisplay
      name="display"
      :value="displayValue"
      :message="displayMessage"
      :isError="calcError"
    ></CalcDisplay>

    <template
      v-for="[area, name] of new Map([...numbers, ...operators, ...memories])"
      :key="area"
    >
      <CalcButton :id="area" :area="area" @click="handler($event)">{{
        name
      }}</CalcButton>
    </template>
  </div>
</template>

<style scoped>
.calc-container {
  width: 400px;
  margin: 0 auto;
  padding: 30px 10px 20px;

  border-radius: 8px;
  background-color: var(--calc-primary-bg-color);

  display: grid;
  justify-content: center;
  grid-template-rows: 100px repeat(6, 75px);
  grid-template-columns: repeat(auto-fill, 75px);
  grid-row-gap: 6px;
  grid-column-gap: 6px;
  grid-template-areas:
    "display    display    display      display        display"
    "clearAll   power      sqrt         backspace      backspace"
    "memorySave memoryRead memoryClear  memoryIncrease memoryDecrease"
    "number7    number8    number9      multiplication division"
    "number4    number5    number6      subtraction    sign"
    "number1    number2    number3      addition       calculate"
    "number0    number0    separator    addition       calculate";
}
</style>
