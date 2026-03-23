<script setup lang="ts">
import type { Movie } from '../types'
import MovieCard from './MovieCard.vue'

defineProps<{
  movies: Movie[]
}>()
</script>

<template>
  <div class="movie-grid">
    <MovieCard 
      v-for="movie in movies" 
      :key="movie.id" 
      :movie="movie"
    />
  </div>
</template>

<style scoped>
.movie-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  padding: 24px;
}
</style>
