import { createRouter, createWebHistory } from 'vue-router';
import Rental from '../components/TodoList.vue';
import Posts from '../components/Posts.vue';
import Albums from '../components/Albums.vue';
import AlbumPhotos from '../components/AlbumPhotos.vue';
import PhotoDetail from '../components/PhotoDetail.vue';

const routes = [
  { path: '/', component: Rental },
  { path: '/posts', component: Posts },
  { path: '/albums', component: Albums },
  { path: '/albums/:id', component: AlbumPhotos },
  { path: '/photos/:id', component: PhotoDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
