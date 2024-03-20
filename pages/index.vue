<script setup lang="ts">
const imageHidden = useCookie("imageHidden", {
  sameSite: "strict",
})
</script>

<template>
  <div class="flex flex-grow justify-center">
    <nuxt-img src="/circles.svg" id="circles" class="-z-0 object-cover opacity-10" v-if="imageHidden" />
    <h1 class="z-0 mt-32 text-6xl font-bold">Hello, World!</h1>
  </div>
</template>

<style>
#circles {
  position: absolute;
  width: 100%;
  height: calc(100% - var(--header-height));
}
</style>
