<template>
  <q-layout view="lHh lpR fFf">
    <!-- Sidebar -->
    <q-drawer show-if-above v-model="drawer" side="left" bordered>
      <q-list dense>
        <q-item clickable v-ripple to="/" exact>
          <q-item-section>
            <q-item-label>Rental</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/posts">
          <q-item-section>
            <q-item-label>Posts</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/albums">
          <q-item-section>
            <q-item-label>Albums</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- Header -->
      <q-header>
        <q-toolbar>
          <q-btn flat round dense icon="menu" @click="drawer = !drawer" class="q-mr-sm" />
          <q-toolbar-title class="text-center">RENTAL MOBIL CHIKAL</q-toolbar-title>
          <q-space />
        </q-toolbar>
      </q-header>

      <!-- Main Content -->
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="footer">
      <q-toolbar>
        <q-toolbar-title>&copy; Chikal Verguson 223510295</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const drawer = ref(false);

const navigateTo = (path) => {
  router.push(path);
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

.footer {
  color: #0c0000;
  text-align: center;
  padding: 20px 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
}

/* Override Quasar styles for specific elements */
.q-list-item.active {
  background-color: #ececec !important;
}
/* Center align toolbar title */
.text-center {
  flex: 1;
  text-align: center;
}
</style>
