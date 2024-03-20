<script setup lang="ts">
const colour = useColorMode()

const toggleTheme = () => {
  if (["dark", "system"].includes(colour.preference)) {
    colour.preference = "light"
  } else {
    colour.preference = "dark"
  }
}
</script>

<template>
  <div class="text-white">
    <button
      class="flex flex-col items-center justify-center rounded-lg bg-white/20 p-3 text-xs transition-colors hover:bg-white/30"
      @click="toggleTheme()"
    >
      <Icon
        name="solar:moon-fog-bold-duotone"
        color="white"
        size="24px"
        v-if="['dark', 'system'].includes($colorMode.preference)"
      />

      <Icon name="solar:sun-fog-bold-duotone" color="white" size="24px" v-else />
    </button>
  </div>
</template>
