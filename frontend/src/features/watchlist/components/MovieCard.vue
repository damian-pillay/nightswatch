<script setup lang="ts">
import type { Movie } from '../types'
import RedactedPoster from './RedactedPoster.vue'

defineProps<{
  movie: Movie
}>()
</script>

<template>
  <div class="movie-card">
    <img v-if="movie.poster" :src="movie.poster" :alt="movie.title" class="poster" />
    <RedactedPoster v-else />
    <div class="info">
      <h3 class="title">{{ movie.title }}</h3>
      <span class="year">{{ movie.releaseDate }}</span>
    </div>
  </div>
</template>

<style scoped>
.movie-card {
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
</style>
