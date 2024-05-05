<script setup lang="ts">

defineProps<{
  text: string
}>()

</script>

<template>
  <a-divider orientation="left" style="height: 60px; border-color: snow">
    <h4
      class="text-gray-300">
      {{ text }}
    </h4>
  </a-divider>
</template>
