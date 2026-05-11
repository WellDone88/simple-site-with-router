<template>
  <div class="home-container">
    <h1>Welcome to the crazy worlds of my cats!</h1>
    <h2>Cat paradise</h2>
    <button @click="$router.push('/cats')">Se kattene mine</button>
  </div>
</template>

<style scoped>
.home-container {
  /* Dette gjør at beholderen tar hele høyden som er tilgjengelig */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center; /* Passer på at teksten inni også er midtstilt */
  min-height: 70vh; /* Gir litt pusterom fra toppen av siden */
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
}
</style>
