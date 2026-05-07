<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Welcome to the crazy worlds of my cats!</h1>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink><br />
        <RouterLink to="/cats">My cats</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
