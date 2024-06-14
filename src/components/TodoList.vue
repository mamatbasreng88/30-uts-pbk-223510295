<template>
  <div class="q-pa-md">
    <h2 class="text-h4">Aplikasi Rental Mobil</h2>
    <q-card class="q-mt-md">
      <q-card-section>
        <q-form @submit.prevent="addTodo">
          <q-input v-model="newTodo" label="Masukkan Jenis Mobil" dense />
          <q-input v-model="newDate" label="Tanggal" type="datetime-local" dense />
          <q-btn type="submit" color="primary" label="Tambahkan" dense />
        </q-form>
      </q-card-section>
    </q-card>

    <h2 class="text-h5 q-mt-md">List Item</h2>
    <div class="tengah">
      <q-card class="q-mt-md">
        <q-card-section>
          <q-list bordered>
            <q-item v-for="(todo, index) in todos" :key="index">
              <q-item-section>
                <q-checkbox v-model="todo.done" color="primary" />
              </q-item-section>
              <q-item-section>
                <q-item-label :class="{ 'text-grey-8': todo.done }">{{ todo.text }}</q-item-label>
                <div class="text-caption">{{ todo.date }}</div>
              </q-item-section>
              <q-item-section side>
                <q-btn dense flat icon="close" @click="removeTodo(index)" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>

    <q-btn class="q-mt-md" color="negative" label="Remove All" dense @click="removeAllTodos" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Define reactive state
const todos = ref([]);
const newTodo = ref('');
const newDate = ref('');

// Methods
const addTodo = () => {
  if (newTodo.value.trim().length === 0) {
    return;
  }
  todos.value.push({
    text: newTodo.value,
    done: false,
    date: newDate.value ? new Date(newDate.value).toLocaleString() : new Date().toLocaleString()
  });
  newTodo.value = '';
  newDate.value = '';
};

const removeTodo = (index) => {
  todos.value.splice(index, 1);
};

const removeAllTodos = () => {
  todos.value = [];
};
</script>

<style scoped>
.text-h4 {
  font-size: 24px;
  margin-bottom: 10px;
}

.text-h5 {
  font-size: 20px;
  margin-bottom: 10px;
}

.text-caption {
  font-size: 12px;
}

.tengah {
  text-align: center;
}

.q-mt-md {
  margin-top: 20px;
}
</style>
