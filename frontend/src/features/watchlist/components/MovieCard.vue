<script setup lang="ts">
import type { Movie } from '../types'
import RedactedPoster from './RedactedPoster.vue'

const props = defineProps<{
  movie: Movie
}>()

const date = new Date(props.movie.releaseDate)
const year = date.getFullYear()
</script>

<template>
  <div class="movie-card">
    <img v-if="movie.poster" :src="movie.poster" :alt="movie.title" class="poster" />
    <RedactedPoster v-else />
    <div class="info">
      <h3 class="title">{{ movie.title }}</h3>
      <span class="year">{{ year }}</span>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.title {
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 500;
  color: #e5e5e5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
}

.year {
  margin-top: auto;
  font-size: 12px;
  color: #a3a3a3;
}
</style>
