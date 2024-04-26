<template>
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
  </div >
</div>
<div class="footer">
    <footer>
      <p>&copy;Chikal Verguson 223510295</p>
    </footer>
  </div>
</template>


<script>
export default {
  data() {
    return {
      newTodo: '',
      newDate: '',
      todos: []
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length === 0) {
        return
      }
      this.todos.push({
        text: this.newTodo,
        done: false,
        date: this.newDate ? new Date(this.newDate).toLocaleString() : new Date().toLocaleString()
      })
      this.newTodo = ''
      this.newDate = ''
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    },
    removeAllTodos() {
      this.todos = []
    }
  }
}
</script>


<style>
.tengah{
  color: black;
  font-size: 25px;
  font-style: normal;
}
h1{
  color: black;
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLascdafiwscuRNE3D5_pqzZqHj83iMAlDRA&s);
  border-radius: 50px;
  font-size: 70px;
}
h2{
  color: black;
}
.depan{
  background-image: url(data:image/jpeg;base64,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);
  border-radius: 30px;
}
.todo-list {
  font-family: sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
body{
background-image: url(https://assets.pepnews.com/img/2y1580622101455/ba6de-sewa%20mobil%20rental.jpg);
background-size: cover;
background-repeat: no-repeat;
background-position: center;
}
.todo-list h1 {
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
  color: black;
}

.todo-list form {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.todo-list input[type="text"] {
  flex: 1;
  font-size: 18px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 50px;
}

.todo-list input[type="datetime-local"] {
  width: 180px;
  font-size: 18px;
  padding: 10px;
  border: 2px solid #000000;
  border-radius: 50px;
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
.footer{
 
  color: #0c0000;
  text-align: center;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  width: 90%;
}
</style>