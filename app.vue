<script setup lang="ts">
useCookie("imageHidden", {
  default: () => "false",
  sameSite: "strict",
})
</script>

<template>
  <div class="dark:bg-background flex h-screen min-h-screen flex-col overflow-x-clip font-onest text-black dark:text-white">
    <NuxtLayout>
      <header class="bg-background border-b dark:border-gray-200">
        <Navbar />
      </header>

      <main id="main" class="flex flex-grow">
        <NuxtPage />
      </main>

      <footer id="footer" class="dark:bg-background z-10 min-h-24 w-screen bg-gray-200">
        <Footer />
      </footer>
    </NuxtLayout>
  </div>
</template>

<style scoped>
#main {
  min-height: calc(100vh - var(--header-height));
}
</style>
