<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
useSeoMeta({
  title: ' False breakout',
  description: 'The best trading strategy. False breakout + false takeaway. Сигнал ложный пробой + ложный вынос. '
})
</script>

<template>
  <div class="w-full h-full animate-opacity">
    <UniversalUModuleTitle text="V-образный разворот" />
    <ol class="flex flex-col gap-2">
      <li class="flex gap-2">
        <ThunderboltOutlined class="text-amber-500 mt-1" />
        <div>И <UniversalUFocus text="от блока и от уровня." /></div>
      </li>
      <li class="flex gap-2">
        <ThunderboltOutlined class="text-amber-500 mt-1" />
        <div>Если от уровня в разворот, <UniversalUFocus text="необходимо дождаться ступеньки" /></div>
      </li>
    </ol>
    <h6 class="my-4 uppercase">
      ГЕНЕРАЦИЯ СИГНАЛА
    </h6>
    <p>- рынок доходит до уровня</p>
    <p>- резко простреливает за уровень</p>
    <p>- резко простреливает обратно</p>
    <p><UniversalUFocus text="Оба прострела сопровождаются повышенным объемом" /></p>
    <LazyUniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/strategy/strategy-primary-signals-v-razvorot.png" description="Расширение" />
  </div>
</template>
