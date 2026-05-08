<script setup lang="ts">
// Dette er "kontrakten": Komponenten sier at den SKAL ha en id og en imageUrl
defineProps<{
  id: number
  imageUrl: string
}>()
</script>

<template>
  <div class="cat-card">
    <img :src="imageUrl" :alt="'Kattebilde nummer ' + id" />
  </div>
</template>

<style scoped>
.cat-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.cat-card:hover {
  transform: translateY(-5px);
}

img {
  width: 100%;
  height: 200px; /* Prøv å sett denne til 200px i stedet for 250px */
  object-fit: cover;
  display: block;
}

.card-info {
  padding: 10px;
  text-align: center;
  font-weight: bold;
}

.cat-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Litt kraftigere skygge */
  transition: transform 0.3s ease;
  line-height: 0; /* Fjerner et bittelite mellomrom som ofte dukker opp under bilder */
}
</style>
