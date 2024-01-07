<script setup lang="ts">

defineProps<{
  text: string
}>()

</script>

<template>
  <span
    class="text-gradient font-bold rounded-md ">
    {{ text }}
  </span>
</template>
