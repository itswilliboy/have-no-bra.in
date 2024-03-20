<script setup lang="ts">
const navItems = [
  { name: "Domains", to: "/" },
  { name: "Second", to: "/" },
  { name: "Third", to: "/" },
]
</script>

<template>
  <!-- display hamburbur menu on smaller screens else display empty div
   -->
  <div class="md:hidden">
    <HamBurBurMenu :nav-items="navItems" />
  </div>

  <div class="hidden md:block">
    <h1 class="absolute">hello big screen</h1>
  </div>
</template>
