<template>
  <div class="error-page">
    <h1>Oops! Noe gikk galt</h1>
    <p>Siden du prøver å nå finnes ikke, eller det oppstod en feil ved lasting.</p>
    <router-link to="/" class="home-link">Gå tilbake til forsiden</router-link>
  </div>
</template>

<script setup lang="ts">
// Ingen spesialisert logikk nødvendig for en enkel error side
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 2rem;
  text-align: center;
}

.error-page h1 {
  color: #e74c3c;
  margin-bottom: 1rem;
}

.error-page p {
  color: #666;
  margin-bottom: 2rem;
  max-width: 500px;
}

.home-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.home-link:hover {
  background-color: #2980b9;
}
</style>
