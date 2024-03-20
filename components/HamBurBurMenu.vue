<script setup lang="ts">
defineProps<{
  navItems: { name: string; to: string }[]
}>()

const isToggled = ref(false)
</script>

<template>
  <div class="text-white">
    <div class="absolute z-20 ml-2 mt-2 w-fit rounded-lg bg-gray-800 px-3 py-0.5 hover:cursor-pointer">
      <Icon name="material-symbols:menu" size="25" class="sticky" @click="isToggled = !isToggled" />
    </div>

    <div class="absolute z-10 h-screen w-screen bg-black opacity-60" v-if="isToggled" @click="isToggled = false" />

    <div
      :class="`absolute z-10 h-screen w-[40vh] -translate-x-full bg-gray-800 px-3 pt-12 transition-all duration-500 ease-out ${isToggled && 'translate-x-0'}`"
    >
      <nuxt-link v-for="item in navItems" :key="item.name" :to="item.to">
        <h2 class="rounded-md p-3 font-onest hover:bg-white/20">
          {{ item.name }}
        </h2>
      </nuxt-link>

      <div class="absolute bottom-4 left-4 flex gap-4">
        <ThemeToggle />
        <ImageToggle />
      </div>
    </div>
  </div>
</template>
