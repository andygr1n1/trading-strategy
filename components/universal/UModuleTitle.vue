<script setup lang="ts">

defineProps<{
  text: string
}>()

</script>

<template>
  <h4
    class="text-slate-500 opacity-50">
    {{ text }}
  </h4>
  <ADivider class="bg-slate-500" />
</template>
