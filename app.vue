<script setup lang="ts">
useCookie("imageHidden", {
  default: () => "false",
  sameSite: "strict",
})
</script>

<template>
  <div class="overflow-x-clip font-onest text-black dark:bg-purpur-800 dark:text-white">
    <NuxtLayout>
      <Navbar />

      <main id="main">
        <NuxtPage />
      </main>

      <footer class="bg-gray-200 dark:bg-purpur-700">
        <Footer />
      </footer>
    </NuxtLayout>
  </div>
</template>

<style scoped>
#main {
  min-height: calc(100vh);
}
</style>
