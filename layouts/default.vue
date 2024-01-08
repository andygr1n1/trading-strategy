<script setup lang="ts">

useSeoMeta({
  title: 'Trading strategy',
  ogTitle: 'Crypto trading strategy',
  ogDescription: 'Trade like God with best trading strategy for crypto',
  description: 'The best trading strategy for crypto. Nickname: andygr1n1. Author:Andrei Grini',
  ogImage: 'https://firebunny-storage.b-cdn.net/trading/trading-strategy/blog/crypto-trading-strategy-logo.webp'
})
</script>

<template>
  <div>
    <div class="flex flex-col w-full min-h-[calc(100vh-var(--top-bar-height))]">
      <div class="flex flex-auto max-w-5xl mx-auto w-full ">
        <SideMenu :class="'hidden md:flex'" />
        <div class="md:pl-[270px] p-5 text-xl mx-auto max-w-5xl flex flex-col w-full animate-opacity">
          <slot />
        </div>
      </div>
    </div>
    <!--  -->
    <div class="fixed bottom-0 items-center justify-center flex md:hidden bg-slate-900 w-full  py-6">
      <MobileMDrawer>
        <template #button>
          <AppstoreFilled
            class="h-8 p-2 flex items-center justify-center cursor-pointer hover:text-teal-500"
            style="font-size: 24px;" />
        </template>
        <template #content="{action}">
          <div>
            <SideMenu :action="action" />
          </div>
        </template>
      </MobileMDrawer>
    </div>
  </div>
</template>
