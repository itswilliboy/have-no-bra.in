<template>
  <div class="flex h-screen min-h-screen min-w-[100vw] flex-col font-onest text-black dark:bg-purpur-800 dark:text-white">
    <NuxtLayout>
      <header class="shadow-2xl"><Navbar /></header>
      <main class="flex flex-grow"><NuxtPage /></main>
    </NuxtLayout>
  </div>
</template>

<style>
@import "./assets/css/main.css";
</style>
