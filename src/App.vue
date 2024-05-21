<template>
  <div id="app">
    <!-- Header -->
    <header>
      <nav>
        <ul>
          <li :class="{ active: activeMenu === 'rental' }" @click="activeMenu = 'rental'">Rental</li>
          <li :class="{ active: activeMenu === 'posts' }" @click="activeMenu = 'posts'">Posts</li>
        </ul>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <div v-if="activeMenu === 'rental'">
        <!-- Fitur Rental Mobil -->
        <h1>Selamat Datang Di Aplikasi Rental Mobil</h1>
        <div class="depan">
          <TodoList 
            :todos="todos" 
            @add-todo="addTodo" 
            @remove-todo="removeTodo" 
            @remove-all-todos="removeAllTodos"
          />
        </div>
      </div>
      
      <div v-else-if="activeMenu === 'posts'">
        <!-- Fitur Postingan -->
        <Posts :users="users" :posts="posts" />
      </div>
    </main>
    
    <div class="footer">
      <footer>
        <p>&copy; Chikal Verguson 223510295</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TodoList from './components/TodoList.vue';
import Posts from './components/Posts.vue';

// Reactive state
const activeMenu = ref('rental');
const todos = ref([]);
const users = ref([]);
const posts = ref([]);

// Methods
const addTodo = (todo) => {
  todos.value.push(todo);
};

const removeTodo = (index) => {
  todos.value.splice(index, 1);
};

const removeAllTodos = () => {
  todos.value = [];
};

// Fetch data on mounted
onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      users.value = data;
    });

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      posts.value = data;
    });
});
</script>

<style scoped>
/* Common styles */
body {
  background-image: url(https://assets.pepnews.com/img/2y1580622101455/ba6de-sewa%20mobil%20rental.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

h1 {
  color: black;
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLascdafiwscuRNE3D5_pqzZqHj83iMAlDRA&s);
  border-radius: 50px;
  font-size: 70px;
  text-align: center;
  margin-top: 20px;
}

.depan {
  border-radius: 30px;
}

/* Header styles */
header {
  background-color: #333;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 20px;
  transition: color 0.3s ease;
}

nav ul li a:hover,
nav ul li.active a {
  color: #ecd60c;
}

nav ul li.active {
  border-bottom: 2px solid #ecd60c;
}

header nav ul li {
  cursor: pointer;
}

header nav ul li:hover {
  border-bottom: 2px solid #ecd60c;
}

.footer {
  color: #0c0000;
  text-align: center;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
}
</style>
