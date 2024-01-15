<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
useSeoMeta({
  title: 'ATR',
  description: 'The best trading strategy. ATR indicator. Индикатор АТР. '
})
</script>

<template>
  <div class="w-full h-full animate-opacity">
    <UniversalUModuleTitle text="ATR" />
    <p>
      Так как количество участников на рынке всегда примерно одинаково, условного “топлива” хватает на преодоление одной и той же дистанции.
    </p>
    <p>Эта дистанция и называется <UniversalUFocus text="ATR (Average True Range)," /> или средний истинный диапазон.</p>
    <p>
      Использование ATR уместно как для одного дня, так и для недели.
      Внутри дня АТР - от хая до лоя.
      АТР можно считать в пунктах или в процентах.
      Главное не считать в барах, так как размер свечей может, и будет различаться.
    </p>
    <ol class="flex flex-col gap-2">
      <li class="flex gap-2">
        <ThunderboltOutlined class="text-amber-500 mt-1" />
        <div>
          <UniversalUFocus text="ATR – количество пунктов которое цена в среднем проходит за определенный период времени" />
        </div>
      </li>
      <li class="flex gap-2">
        <ThunderboltOutlined class="text-amber-500 mt-1" />
        <div>
          <UniversalUFocus text="Игнорировать сделки, если ATR больше 80%" />
        </div>
      </li>
      <li class="flex gap-2">
        <ThunderboltOutlined class="text-amber-500 mt-1" />
        <div>
          <UniversalUFocus text="ATR измеряется на глаз" />
        </div>
      </li>
      <li class="flex gap-2">
        <ThunderboltOutlined class="text-amber-500 mt-1" />
        <div>
          <UniversalUFocus text="После прохождения ATR может произойти как разворот, так и откат или накопление" />
        </div>
      </li>
    </ol>
  </div>
</template>
