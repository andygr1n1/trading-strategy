<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
useSeoMeta({
  title: 'Trading strategy',
  description: 'The best trading strategy'
})
</script>

<template>
  <div class="w-full h-full py-3 animate-opacity">
    <h5 class="text-slate-500 opacity-50">
      Blog
    </h5>
    <div class="flex flex-wrap w-full gap-5">
      <NuxtLink to="/blog/icp-bright-future" class="flex flex-col rounded  bg-slate-950 p-3 h-fit w-fit hover:scale-[101%] duration-300  ">
        <div class="text-sm opacity-50 pb-2">
          07.01.2024
        </div>
        <div>ICP bright future</div>
        <NuxtImg class="w-full" src="https://firebunny-storage.b-cdn.net/trading/trading-strategy/blog/icp-web-3.png" />
      </NuxtLink>
    </div>
  </div>
</template>
