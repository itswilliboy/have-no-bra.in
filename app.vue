<template>
  <div class="flex h-screen min-h-screen flex-col overflow-x-clip font-onest text-black dark:bg-purpur-800 dark:text-white">
    <NuxtLayout>
      <header class="shadow-2xl"><Navbar /></header>
      <main id="main" class="flex flex-grow"><NuxtPage /></main>
      <footer id="footer" class="z-10 min-h-24 w-screen bg-purpur-700"><Footer /></footer>
    </NuxtLayout>
  </div>
</template>

<style>
@import "./assets/css/main.css";
</style>

<style scoped>
#main {
  min-height: calc(100vh - var(--header-height));
}
</style>

<script setup lang="ts">
useCookie("imageHidden", {
  default: () => "false",
  sameSite: "strict",
})
</script>
