<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

</script>

<template>
  <div class="w-full h-full py-3 animate-opacity">
    <h5 class="text-slate-500 opacity-50">
      Blog
    </h5>
    <div class="flex flex-wrap w-full gap-5">
      <!--  -->
      <NuxtLink to="/blog/trading/ikigai-strategy" class="flex flex-col rounded  bg-slate-950 p-3 h-fit w-full hover:scale-[101%] duration-300">
        <div class="text-sm opacity-50 pb-2">
          09.01.2024
        </div>
        <div><span class="text-rose-700 font-bold">IKIGAI</span> strategy</div>
        <NuxtImg class="w-full my-4 rounded-md" src="https://firebunny-storage.b-cdn.net/trading/trading-strategy/blog/ikigai-primer-combo-2.png" />
      </NuxtLink>
      <!--  -->
      <NuxtLink to="/blog/trading/entry-after-fall" class="flex flex-col rounded  bg-slate-950 p-3 h-fit w-full hover:scale-[101%] duration-300">
        <div class="text-sm opacity-50 pb-2">
          08.01.2024
        </div>
        <div>After fall strategy</div>
        <NuxtImg class="w-full my-4 rounded-md" src="https://firebunny-storage.b-cdn.net/trading/trading-strategy/blog/vhod-posle-padenia.png" />
      </NuxtLink>
      <!--  -->
      <NuxtLink to="/blog/icp-bright-future" class="flex flex-col rounded  bg-slate-950 p-3 h-fit w-full hover:scale-[101%] duration-300  ">
        <div class="text-sm opacity-50 pb-2">
          07.01.2024
        </div>
        <div>ICP bright future</div>
        <NuxtImg class="w-full my-4 rounded-md" src="https://firebunny-storage.b-cdn.net/trading/trading-strategy/blog/icp-web-3.png" />
      </NuxtLink>
    </div>
  </div>
</template>
