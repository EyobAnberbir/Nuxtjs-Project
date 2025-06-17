<template>
  <div class="counter">
    <h2>{{ title }}</h2>
    <p>Current count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button> <!-- ❌ reset not defined -->
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// ❌ forgot to define props properly
const props = defineProps({
  title: String,
  min: Number
})

// ❌ forgot default values for props, might cause issues
// ❌ forgot to validate prop types properly (e.g., required / default)

// ❌ count initialized incorrectly (should use ref(0))
let count = ref() 

// ❌ computed property uses undefined min (should be props.min)
const isMin = computed(() => count.value <= min)

// ❌ method uses undeclared min
function decrement() {
  if (count.value > min) {
    count.value--
  }
}

// ❌ forgot to define increment method (but used in template)
</script>

<style scoped>
.counter {
  border: 1px solid #ccc;
  padding: 1rem;
  max-width: 300px;
  text-align: center;
}
/* ❌ invalid CSS property */
button {
  marginn: 0 0.5rem; 
}
</style>
