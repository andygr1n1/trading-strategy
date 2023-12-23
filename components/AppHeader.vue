<script setup lang="ts">
const route = useRoute()

const isActive = (path: string) => {
  return route.path === path
}
</script>

<template>
  <ul class="flex gap-2">
    <li>
      <NuxtLink to="/" :class="{ active: isActive('/') }">
        Home
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/check-list" :class="{ active: isActive('/check-list') }">
        Check list
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/strategy" :class="{ active: isActive('/strategy') }">
        Strategy
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/risk-management" :class="{ active: isActive('/risk-management') }">
        Risk Management
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/book" :class="{ active: isActive('/book') }">
        Book
      </NuxtLink>
    </li>
  </ul>
</template>

<style>
.active {
  @apply bg-red-500 duration-300;
}
</style>
