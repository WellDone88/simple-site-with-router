<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav><RouterLink to="/">Home</RouterLink> | <RouterLink to="/cats">My cats</RouterLink></nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
/* Legg merke til at det IKKE står 'scoped' her */
body {
  background-color: #aca7a7; /* For eksempel en mørk modus */
  color: rgb(85, 69, 69);
  margin: 0;
  font-family: sans-serif;
}
</style>
