<template>
    <div class="todo-list">
      <h2>Aplikasi Rental Mobil</h2>
      <form @submit.prevent="addTodo">
        <input type="text" v-model="newTodo" placeholder="Masukkan Jenis Mobil" />
        <input type="datetime-local" v-model="newDate" />
        <button type="submit" class="tambahkan">Tambahkan</button>
      </form>
      <h2>List Item</h2>
      <div class="tengah">
        <ul>
          <li v-for="(todo, index) in todos" :key="index">
            <input type="checkbox" v-model="todo.done" />
            <span :class="{ 'done': todo.done }">{{ todo.text }}</span>
            <span>{{ todo.date }}</span>
            <button @click="removeTodo(index)">Remove</button>
          </li>
        </ul>
        <br>
        <button @click="removeAllTodos">Remove All</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Define props
  const props = defineProps({
    todos: Array
  });
  
  // Define reactive state
  const newTodo = ref('');
  const newDate = ref('');
  
  // Emit function
  const emit = defineEmits(['add-todo', 'remove-todo', 'remove-all-todos']);
  
  // Methods
  const addTodo = () => {
    if (newTodo.value.trim().length === 0) {
      return;
    }
    emit('add-todo', {
      text: newTodo.value,
      done: false,
      date: newDate.value ? new Date(newDate.value).toLocaleString() : new Date().toLocaleString()
    });
    newTodo.value = '';
    newDate.value = '';
  };
  
  const removeTodo = (index) => {
    emit('remove-todo', index);
  };
  
  const removeAllTodos = () => {
    emit('remove-all-todos');
  };
  </script>
  
  <style scoped>
  /* Add relevant styles here */
  </style>
  