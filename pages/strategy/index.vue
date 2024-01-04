<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
useSeoMeta({
  title: 'Trading strategy',
  description: 'The best trading strategy'
})
</script>

<template>
  <div class="w-full h-full">
    <p>Сперва анализируем инструмент на предмет блоков.</p>
    <p>Все блоки анализируются  <UniversalUFocus text="на фоновом тайм фрейме" />.</p>
    <p>
      Увидев  <UniversalUFocus text="Ордер Блок" />, мы предполагаем, что
      крупный игрок выставил лимитную заявку, от которой будет отскакивать
      цена. С большой вероятностью цена отскочит минимум 1 раз.
    </p>

    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/order-block-1.png" description="Order block" />
    <p>
      Задача  <UniversalUFocus text="Брейкер Блока" /> –
      совершить движение цены с манипуляцией, для сбора ликвидности
      в сторону значимых максимумов и минимумов с последующим пробоем в обратном направлении.
    </p>
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/1-2__breaker-block_2.png" description="Breaker block" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/1-2__breaker-block_1.png" description="Breaker block" />
    <p>
      <UniversalUFocus text="Митигейшн Блок" /> –
      крупный игрок выкидывает из рынка мелких спекулянтов. После закрывает свои убыточные позиции и продолжает движение в нужном ему направлении.
    </p>
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/1-3-1-mitigation.png" description="Mitigation block" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/1-3-2-mitigation.png" description="Mitigation block" />
  </div>
</template>
