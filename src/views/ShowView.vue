<script setup lang="ts">
import CatCard from '@/components/CatCard.vue'

const MineKatter = [
  { id: 1, bilde: '/cats/cat3.jpg' },
  { id: 2, bilde: '/cats/cat4.jpg' },
  { id: 3, bilde: '/cats/cat5.jpg' },
  { id: 4, bilde: '/cats/cat6.jpg' },
  { id: 5, bilde: '/cats/cat7.jpg' },
  { id: 6, bilde: '/cats/cat8.jpg' },
  { id: 7, bilde: '/cats/cat9.jpg' },
  { id: 8, bilde: '/cats/cat10.jpg' },
  { id: 9, bilde: '/cats/cat11.jpg' },
  { id: 10, bilde: '/cats/cat12.jpg' },
  { id: 11, bilde: '/cats/cat13.jpg' },
  { id: 12, bilde: '/cats/cat14.jpg' },
  { id: 13, bilde: '/cats/cat15.jpg' },
  { id: 14, bilde: '/cats/cat16.jpg' },
  { id: 15, bilde: '/cats/cat17.jpg' },
]
</script>

<template>
  <div class="container">
    <h2>Maximus & Obelix</h2>
    <div class="gallery">
      <CatCard v-for="katt in MineKatter" :key="katt.id" :id="katt.id" :imageUrl="katt.bilde" />
      <button @click="$router.push('/')">Gå tilbake til forsiden</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px; /* Begrenser hvor bred hele siden kan bli */
  margin: 0 auto; /* Sentrerer alt på midten */
  padding: 20px;
}

.gallery {
  display: grid;
  /* Dette tvinger kortene til å stå ved siden av hverandre */
  /* minmax(200px, 1fr) betyr: aldri mindre enn 200px, men del på plassen som er til overs */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px; /* Luft mellom kortene */
}

h2 {
  text-align: center;
  font-family: sans-serif;
}
</style>
