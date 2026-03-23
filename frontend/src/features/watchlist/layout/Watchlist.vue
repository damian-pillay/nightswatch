<script setup lang="ts">
import MovieGrid from '../components/MovieGrid.vue';
import { useMovies } from '../api/useMovies'

const { result, loading, error } = useMovies()
</script>

<template>
  <div class="app">
    <header class="header">
      <h1 class="logo">NIGHTSWATCH</h1>
    </header>

    <main class="main">
      <div v-if="loading" class="loading">Loading...</div>
      <div v-else-if="error" class="error">Error: {{ error.message }}</div>
      <MovieGrid v-else :movies="result?.movies ?? []" />
    </main>
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

.main {
  min-height: calc(100vh - 81px);
}

.loading,
.error {
  padding: 24px;
  color: #a3a3a3;
  font-size: 16px;
}

.error {
  color: #ef4444;
}
</style>
