<script setup lang="ts">

useSeoMeta({
  title: 'Trading strategy',
  description: 'The best trading strategy'
})
</script>

<template>
  <div class="w-full h-full py-3 animate-opacity">
    <h5 class="text-slate-500 opacity-50">
      Check list
    </h5>
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
        <ACheckbox size="large" /><span>Был ли сигнал? Сигналы очевидны!!!</span>
      </li>
      <li>
        <ACheckbox size="large" /><span>Если сделка в продолжение от уровня или от Брейкер Блока, то был ли откат?</span>
      </li>
      <li>
        <ACheckbox size="large" /><span>Если сделка в контр тренд от уровня, была ли ступенька?</span>
      </li>
      <li>
        <ACheckbox size="large" /><span>Дельта и объемы в допустимых пределах. Вход не в треугольник. Аномальной волатильности нет.</span>
      </li>
      <li>
        <ACheckbox size="large" /><span>Риск не больше 2%</span>
      </li>
      <li>
        <ACheckbox size="large" /><span> Математическое ожидание, P&L > 1.5</span>
      </li>
      <li>
        <ACheckbox size="large" /><span>Сделка 100% ожидаема</span>
      </li>
    </ol>
  </div>
</template>

<style scoped>

li {
@apply flex w-fit gap-2 justify-start items-start;
}
</style>
