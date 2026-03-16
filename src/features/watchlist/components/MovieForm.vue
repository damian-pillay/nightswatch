<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  add: [movie: { title: string; year: number; poster?: string }]
  close: []
}>()

const title = ref('')
const year = ref<number>(2024)
const poster = ref('')

const handleSubmit = () => {
  if (!title.value.trim()) return
  
  emit('add', {
    title: title.value.trim(),
    year: year.value || new Date().getFullYear(),
    poster: poster.value.trim() || undefined
  })
  
  title.value = ''
  year.value = new Date().getFullYear()
  poster.value = ''
}
</script>

<template>
  <div class="form-overlay" @click.self="emit('close')">
    <form @submit.prevent="handleSubmit" class="add-form">
      <h2>Add Movie</h2>
      
      <div class="field">
        <label>Title</label>
        <input v-model="title" type="text" placeholder="Movie title" required />
      </div>
      
      <div class="field">
        <label>Year</label>
        <input v-model="year" type="number" placeholder="2024" />
      </div>
      
      <div class="field">
        <label>Poster URL (optional)</label>
        <input v-model="poster" type="url" placeholder="https://..." />
      </div>
      
      <button type="submit" class="submit-btn">Add to Watchlist</button>
    </form>
  </div>
</template>

<style scoped>
.form-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.add-form {
  background: #1a1a1a;
  padding: 32px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
}

h2 {
  margin: 0 0 24px;
  color: #e5e5e5;
  font-size: 20px;
}

.field {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  color: #a3a3a3;
}

input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #333;
  border-radius: 6px;
  background: #0f0f0f;
  color: #e5e5e5;
  font-size: 14px;
}

input:focus {
  outline: none;
  border-color: #8b5cf6;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  border: none;
  border-radius: 6px;
  background: #8b5cf6;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
}

.submit-btn:hover {
  background: #7c3aed;
}
</style>
