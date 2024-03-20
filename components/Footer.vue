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

  <div class="py-3 text-center text-gray-500 dark:text-gray-400">
    <p>
      Made with ❤️ using <a href="https://nuxt.com" class="green-brand">Nuxt</a> and
      <a href="https://vuejs.org" class="green-brand">Vue.js</a>
      <br />

      Source code available at
      <span>
        <Icon name="mdi:github" size="20px" />
        <a href="https://github.com/itswilliboy/have-no-bra.in" class="green-brand">GitHub</a>
      </span>
      <br />
    </p>
  </div>
</template>

<style scoped>
.green-brand {
  @apply font-extrabold text-green-brand transition-all;
}

.green-brand:hover {
  @apply brightness-150;
}
</style>
