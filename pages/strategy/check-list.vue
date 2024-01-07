<script setup lang="ts">

useSeoMeta({
  title: 'Trading strategy',
  description: 'The best trading strategy'
})
</script>

<template>
  <div class="w-full h-full py-3 animate-opacity">
    <h6 class="uppercase">
      Прежде чем зайти в сделку
    </h6>
    <ol class="flex flex-col gap-3 py-5 list-disc animate-opacity ">
      <li>
        <ACheckbox size="large" /><span>ATR</span>
      </li>
      <li>
        <ACheckbox size="large" /><span>Сделка от уровня или от блока</span>
      </li>
      <li>
        <ACheckbox size="large" /><span>Сигналы очевидны</span>
      </li>
      <li>
        <ACheckbox size="large" /><span>Никаких аномалий, дельта и объемы в допустимых пределах</span>
      </li>
      <li>
        <ACheckbox size="large" /><span>Риск не больше 2%</span>
      </li>
      <li>
        <ACheckbox size="large" /><span>P&L > 1.5</span>
      </li>
      <li>
        <ACheckbox size="large" /><span>Сделка 100% ожидаема</span>
      </li>
    </ol>
  </div>
</template>

<style scoped>

li {
@apply flex w-fit gap-2;
}
</style>
