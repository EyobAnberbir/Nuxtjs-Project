<template>
  <div class="todo-list">
    <h2>{{ heading }}</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.text }}
        <button @click="removeItem(item.id)">Remove</button>
      </li>
    </ul>
    <input v-model="newItemText" placeholder="Add todo" />
    <button @click="addItem">Add</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// ❌ props not defined at all (but heading is used)
const heading = 'Todo List'  // Should come from props

// ❌ items initialized incorrectly (should use ref([]))
const items = []

// ❌ newItemText uninitialized
let newItemText

function addItem() {
  if (newItemText.trim() !== '') {
    items.push({
      id: Date.now(),
      text: newItemText
    })
    newItemText = '' 
  }
}

function removeItem(id) {
  // ❌ logic error: doesn't actually update the reactive list
  items.filter(item => item.id !== id)
}
</script>

<style scoped>
.todo-list {
  border: 2px dotted #444;
  padding: 1rem;
  width: 400px;
}
/* ❌ missing semicolon */
button {
  background-color: #007bff
  color: white;
}
</style>
