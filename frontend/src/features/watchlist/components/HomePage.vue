<script setup lang="ts">
import { ref } from 'vue'
import { useMovieStore } from '../stores/movieStore'
import MovieGrid from './MovieGrid.vue'
import MovieForm from './MovieForm.vue'
import type { MovieWithoutId } from '../types'

const { movies, addMovie } = useMovieStore()
const showForm = ref(false)

const handleAddMovie = (movie: MovieWithoutId) => {
  addMovie(movie)
  showForm.value = false
}
</script>

<template>
  <div class="app">
    <header class="header">
      <h1 class="logo">NIGHTSWATCH</h1>
      <button class="add-btn" @click="showForm = true">+</button>
    </header>

    <main class="main">
      <MovieGrid 
        :movies="movies" 
      />
    </main>

    <MovieForm 
      v-if="showForm" 
      @add="handleAddMovie"
      @close="showForm = false"
    />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  background: #0f0f0f;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #262626;
}

.logo {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #8b5cf6;
  letter-spacing: 2px;
}

.add-btn {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background: #8b5cf6;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.add-btn:hover {
  background: #7c3aed;
}

.main {
  min-height: calc(100vh - 81px);
}
</style>
