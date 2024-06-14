<template>
    <div>
      <h1>Albums</h1>
      <q-list>
        <q-item v-for="album in albums" :key="album.id" clickable @click="goToAlbum(album.id)">
          <q-item-section>{{ album.title }}</q-item-section>
        </q-item>
      </q-list>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Albums',
    setup() {
      const albums = ref([]);
      const router = useRouter();
  
      onMounted(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
          .then(response => response.json())
          .then(data => {
            albums.value = data;
          });
      });
  
      const goToAlbum = (albumId) => {
        router.push(`/albums/${albumId}`);
      };
  
      return {
        albums,
        goToAlbum,
      };
    },
  };
  </script>
  