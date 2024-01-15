<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
useSeoMeta({
  title: 'Breakdown',
  description: 'The best trading strategy. Stop signal - Breakdown. Стоп сигнал - вход в пробой. '
})
</script>

<template>
  <div class="w-full h-full animate-opacity">
    <UniversalUModuleTitle text="Пробой" />
    <p>Пробой по фоновому ТФ</p>
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/strategy/breakdown.png" />
    <p>
      В пробой входить ни в коем случае не следует. Нужно дожидаться пробоя, отката и ретеста к уровню с обратной стороны.
    </p>
  </div>
</template>
