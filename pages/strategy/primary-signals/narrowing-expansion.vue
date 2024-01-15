<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
useSeoMeta({
  title: 'Narrowing + Expansion',
  description: 'The best trading strategy. Narrowing + Expansion signal. Сигнал сужение расширение. '
})
</script>

<template>
  <div class="w-full h-full animate-opacity">
    <UniversalUModuleTitle text="Сужение - расширение" />
    <ol class="flex flex-col gap-2">
      <li class="flex gap-2">
        <ThunderboltOutlined class="text-amber-500 mt-1" />
        <div>И <UniversalUFocus text="от блока и от уровня." /></div>
      </li>
      <li class="flex gap-2">
        <ThunderboltOutlined class="text-amber-500 mt-1" />
        <div>Если от уровня в разворот, <UniversalUFocus text="необходимо дождаться ступеньки" /></div>
      </li>
      <li class="flex gap-2">
        <ThunderboltOutlined class="text-amber-500 mt-1" />
        <div>
          Сигнал на вход должен появиться не дальше чем на <UniversalUFocus text="1 среднюю свечу от уровня" />
        </div>
      </li>
    </ol>
    <h6 class="my-4 uppercase">
      ГЕНЕРАЦИЯ СИГНАЛА
    </h6>
    <p>- рынок доходит до уровня</p>
    <p>- диапазон свечей сужается</p>
    <p>- происходит прострел в обратную сторону</p>
    <p><UniversalUFocus text="На сужении объем снижен, на расширении повышен" /></p>
    <LazyUniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/strategy/rashirenie-bazovoe.png" description="Расширение" />
    <p>Далее расширение происходит серией свечей. Повышение объема и волатильности на этих свечах может быть менее значительным.</p>
    <LazyUniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/strategy/rashirenie-seriei.png" description="Расширение серией" />
  </div>
</template>
