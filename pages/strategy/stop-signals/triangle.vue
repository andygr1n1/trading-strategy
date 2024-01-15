<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
useSeoMeta({
  title: 'Triangle',
  description: 'The best trading strategy. Stop signal - Triangle. Стоп сигнал - треугольник. '
})
</script>

<template>
  <div class="w-full h-full animate-opacity">
    <UniversalUModuleTitle text="Треугольник" />
    <p>Треугольник мы учитываем по фоновому ТФ</p>
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/strategy/stop-signals-triangle-stop.png" description="Stop" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/strategy/stop-signals-triangle-action.png" description="Not Stop" />
    <p>Если на фоне треугольник маленький, а на рабочем большой, лучше не входить</p>
  </div>
</template>
