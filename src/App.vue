<template>
  <div id="app">
    <!-- Header -->
    <header>
      <nav>
        <ul>
          <li :class="{ active: activeMenu === 'rental' }" @click="showRental">Rental</li>
          <li :class="{ active: activeMenu === 'posts' }" @click="showPosts">Posts</li>
        </ul>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <div v-if="activeMenu === 'rental'">
        <!-- Fitur Rental Mobil -->
        <h1>Selamat Datang Di Aplikasi Rental Mobil</h1>
        <div class="depan">
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
        </div>
      </div>
      
      <div v-else-if="activeMenu === 'posts'">
        <!-- Fitur Postingan -->
        <h2>Postingan</h2>
        <select v-model="selectedUser">
          <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
        </select>
        <div v-if="selectedUser">
          <div v-for="post in filteredPosts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
          </div>
        </div>
        <div v-else>
          <p>Silakan pilih pengguna untuk melihat postingan mereka.</p>
        </div>
      </div>
    </main>
    
    <div class="footer">
      <footer>
        <p>&copy; Chikal Verguson 223510295</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeMenu: 'rental',
      newTodo: '',
      newDate: '',
      todos: [],
      users: [],
      posts: [],
      selectedUser: null
    };
  },
  methods: {
    showRental() {
      this.activeMenu = 'rental';
    },
    showPosts() {
      this.activeMenu = 'posts';
    },
    addTodo() {
      if (this.newTodo.trim().length === 0) {
        return;
      }
      this.todos.push({
        text: this.newTodo,
        done: false,
        date: this.newDate ? new Date(this.newDate).toLocaleString() : new Date().toLocaleString()
      });
      this.newTodo = '';
      this.newDate = '';
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    removeAllTodos() {
      this.todos = [];
    }
  },
  mounted() {
    // Fetch users data
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        this.users = data;
      });

    // Fetch posts data
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        this.posts = data;
      });
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(post => post.userId === parseInt(this.selectedUser));
    }
  }
};
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

.todo-list {
  font-family: sans-serif;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
}

.todo-list form {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.todo-list input[type="text"],
.todo-list input[type="datetime-local"] {
  flex: 1;
  font-size: 18px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
  margin-right: 10px;
}

.todo-list button {
  font-size: 18px;
  padding: 10px;
  background-color: #ecd60c;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.todo-list button.tambahkan {
  margin-left: 10px;
}

.todo-list h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.todo-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.todo-list li span.date {
  font-size: 16px;
  color: #666;
}

.todo-list button.remove {
  background-color: #f44336;
}

.todo-list button.remove:hover {
  background-color: #da190b;
}

.todo-list button.remove:active {
  background-color: #da190b;
}

.done {
  text-decoration: line-through;
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
</style>