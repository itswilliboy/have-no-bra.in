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
  <div class="text-white">
    <button
      class="flex flex-col items-center justify-center rounded-lg bg-white/20 p-3 text-xs text-gray-400 transition-colors hover:bg-white/30"
      @click="handleChange()"
    >
      <Icon name="material-symbols:image-outline-rounded" size="24px" v-if="imageHidden == 'true'" />

      <Icon name="material-symbols:image-not-supported-outline-rounded" size="24px" v-else />
    </button>
  </div>
</template>
