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
  <div class="flex flex-col w-full min-h-[calc(100vh-var(--top-bar-height))]">
    <div class="flex flex-auto">
      <StrategySideMenu :class="'hidden md:flex'" />
      <div class="w-full p-5 text-xl">
        First find smart money blocks.
      </div>
    </div>
    <div class="fixed bottom-0 items-center justify-center flex md:hidden bg-slate-950 w-full p-2 pb-6">
      <MobileMDrawer>
        <template #button>
          <AppstoreFilled
            class="h-8 p-2 flex items-center justify-center cursor-pointer hover:text-teal-500"
            style="font-size: 24px;" />
        </template>
        <template #content>
          <div>
            <StrategySideMenu />
          </div>
        </template>
      </MobileMDrawer>
    </div>
  </div>
</template>
