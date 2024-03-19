<template>
  <div class="text-white">
    <button
      class="flex flex-col items-center justify-center rounded-lg bg-white/20 p-3 text-xs transition-colors hover:bg-white/30"
      @click="swapTheme()"
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

<script setup>
const swapTheme = () => {
  if (["dark", "system"].includes(colour.preference)) {
    colour.preference = "light"
  } else {
    colour.preference = "dark"
  }
}
const colour = useColorMode()
</script>
