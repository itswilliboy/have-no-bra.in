<script setup lang="ts">
const imageHidden = useCookie("imageHidden", {
  sameSite: "strict",
})

const handleChange = () => {
  if (imageHidden.value == "true") {
    imageHidden.value = "false"
  } else {
    imageHidden.value = "true"
  }
}
</script>

<template>
  <base target="_blank" />

  <div class="flex h-full w-full items-center justify-center text-gray-500 dark:text-gray-400">
    <div class="text-center">
      <p>
        Made with ❤️ using <a href="https://nuxt.com" class="green-brand">Nuxt</a> and
        <a href="https://vuejs.org" class="green-brand">Vue.js</a>
        <br />
        Source code available on <a href="https://github.com/itswilliboy/have-no-bra.in" class="green-brand">GitHub</a>
        <br />
      </p>

      <p v-if="$route.name == 'index'">
        [<button class="green-brand" @click="handleChange()">Click Here</button>] to toggle the background image
      </p>
    </div>
  </div>
</template>

<style scoped>
.green-brand {
  @apply text-green-brand font-extrabold transition-all;
}

.green-brand:hover {
  @apply brightness-150;
}
</style>
