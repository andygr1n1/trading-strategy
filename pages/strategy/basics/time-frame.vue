<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
useSeoMeta({
  title: 'ATR',
  description: 'The best trading strategy. Time frame. Тайм фрейм. '
})
</script>

<template>
  <div class="w-full h-full animate-opacity">
    <UniversalUModuleTitle text="Тайм фрейм" />
    <p>
      Каждому инструменту и методу торговли предпочтителен свой особенный инструмент.
    </p>
    <p>
      Так, при торговле фьючерсами, криптовалютой, хорошо будет использовать  <UniversalUFocus text="М30 - М5." />
    </p>
    <p>
      Акции удобно торговать на <UniversalUFocus text=" H2 | H4 - M15 | M30." />
    </p>
    <p>
      Для форекса идеально подойдёт  <UniversalUFocus text="H2 | M30 - M15 | M5." />
    </p>
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/strategy/time-frames.png" />
  </div>
</template>
