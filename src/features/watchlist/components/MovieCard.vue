<script setup lang="ts">
import type { Movie } from '../types'

defineProps<{
  movie: Movie
}>()

const emit = defineEmits<{
  delete: [id: string]
}>()
</script>

<template>
  <div class="movie-card">
    <img :src="movie.poster" :alt="movie.title" class="poster" />
    <div class="info">
      <h3 class="title">{{ movie.title }}</h3>
      <span class="year">{{ movie.year }}</span>
    </div>
    <button class="delete-btn" @click="emit('delete', movie.id)">×</button>
  </div>
</template>

<style scoped>
.movie-card {
  position: relative;
  width: 180px;
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.movie-card:hover {
  transform: scale(1.03);
}

.poster {
  width: 100%;
  height: 270px;
  object-fit: cover;
}

.info {
  padding: 12px;
}

.title {
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 500;
  color: #e5e5e5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.year {
  font-size: 12px;
  color: #a3a3a3;
}

.delete-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: #e5e5e5;
  font-size: 18px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease, background 0.2s ease;
}

.movie-card:hover .delete-btn {
  opacity: 1;
}

.delete-btn:hover {
  background: #ef4444;
}
</style>
