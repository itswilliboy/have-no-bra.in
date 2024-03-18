<template>
  <div class="flex h-16 w-screen flex-row items-center justify-between gap-8 bg-purpur-700 px-8 text-white">
    <div class="flex flex-row items-center gap-8">
      <NuxtLink to="/">
        <h1 class="title text-3xl font-bold text-white transition-colors hover:text-white/80">No Brain</h1>
      </NuxtLink>
      <div class="flex w-80 flex-row gap-2">
        <template v-for="item in menuItems" :key="item">
          <nuxt-link :to="item.to">
            <h2 class="hover:bg-whie/20 rounded-lg p-3 font-semibold transition-colors hover:bg-white/20">
              {{ item.name }}
            </h2>
          </nuxt-link>
        </template>
      </div>
    </div>
    <ThemeButton />
  </div>
</template>

<script setup>
const menuItems = [
  { name: "Domains", to: "#" }, // temporary #
  { name: "Second", to: "#" },
  { name: "Third", to: "#" },
]
</script>
