<script setup lang="ts">

defineProps<{
  href: string
  description?:string
}>()

</script>

<template>
  <a class="relative w-full" :href="href" target="_blank">
    <NuxtImg class="my-10 w-full rounded-md md:hover:scale-110 duration-300" :src="href" @click="console.log('clicked')" />
    <div class="absolute right-3 bottom-3 cursor-pointer text-xs md:text-xl duration-300 font-bold bg-slate-950/60 p-2 rounded-md text-teal-500">
      {{ description }}
    </div>
  </a>
</template>

<style lang="scss">

</style>
