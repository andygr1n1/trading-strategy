<script setup lang="ts">

defineProps<{
  text: string
}>()

</script>

<template>
  <span
    class="bg-teal-500 font-bold px-2 rounded-md text-slate-950">
    {{ text }}
  </span>
</template>
