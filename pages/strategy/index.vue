<script setup lang="ts">
definePageMeta({
  layout: 'topbar'
})
useSeoMeta({
  title: 'Trading strategy',
  description: 'The best trading strategy'
})
</script>

<template>
  <div class="flex min-h-[calc(100vh-var(--top-bar-height))]">
    <StrategySideMenu />
    <div class="w-full">
      content
    </div>
  </div>
</template>
