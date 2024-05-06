<script setup lang="ts">

defineProps<{
  text: string
}>()

</script>

<template>
  <h2
    class="text-gray-300">
    {{ text }}
  </h2>
</template>
