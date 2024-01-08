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
    <h5 class="text-slate-500 opacity-50">
      Narrowing + Expansion
    </h5>
    <p><UniversalUFocus text="From Block and From Level." /></p>
    <p><UniversalUFocus text="If the trade is from a level to a reversal, then in addition to the signal there should be a step." /></p>
    <p>
      Сигнал на вход должен появиться не дальше чем на 1 среднюю свечу от уровня
    </p>
  </div>
</template>
