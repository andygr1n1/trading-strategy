<script setup lang="ts">
useSeoMeta({
  title: 'Trading strategy',
  description: 'The best trading strategy'
})

definePageMeta({
  layout: 'default',
  title: 'Trading strategy'
})
</script>

<template>
  <div class="flex min-h-screen w-full flex-col items-center justify-center gap-10 p-10">
    <h1 class="uppercase text-center leading-snug">
      trading strategy
    </h1>
    <div class="flex gap-5 mx-5 mt-20 w-full px-5 flex-wrap max-w-[480px] md:max-w-screen-md lg:max-w-screen-lg">
      <NuxtLink to="/strategy" class="module">
        <h6>Strategy</h6>
        <div class="text-sm opacity-90">
          Play games by on your own rules
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style>
.module {
  @apply bg-teal-500 text-slate-950 hover:bg-teal-400 duration-300 h-28 p-5 w-full rounded-md flex flex-col gap-2 flex-[100%] md:flex-[40%] lg:flex-1;
}

.module-h {
  @apply text-xl;
}
</style>
