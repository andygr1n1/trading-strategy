<script setup lang="ts">

useSeoMeta({
  title: 'Trading strategy',
  description: 'The best trading strategy'
})
</script>

<template>
  <div class="w-full h-full py-3 animate-opacity">
    <UniversalUModuleTitle text=" Чек лист" />
    <p>
      Намного важнее <UniversalUFocus text="зайти в сделку от уровня, в сторону тренда и с наличием запаса хода, " /> чем в сделку с хорошим сигналом.
      Не бойтесь использовать “кривые” сигналы, потому что в рынках кривое абсолютно всё.
    </p>
    <h6 class="uppercase">
      Прежде чем зайти в сделку
    </h6>
    <ol class="flex flex-col gap-3 py-5 list-disc animate-opacity">
      <li>
        <ACheckbox size="large" /><span>ATR</span>
      </li>
      <!--  -->
      <li class="flex flex-col">
        <div class="flex w-fit gap-2">
          <ACheckbox size="large" /><span>Разворот локального тренда в сторону глобального тренда</span>
        </div>
        <ol class="ml-5 flex flex-col gap-2">
          <li>
            <ThunderboltOutlined class="text-amber-500 mt-1" />
            <div>
              <UniversalUFocus text="Сделки против фонового тренда " /> связаны с повышенным риском и имеют плохое математическое ожидание.
            </div>
          </li>
          <li>
            <ThunderboltOutlined class="text-amber-500 mt-1" />
            <div>
              Самая лучшая точка входа будет там
              <UniversalUFocus text=", где произойдет разворот локальной тренда в сторону глобального тренда." />
            </div>
          </li>
        </ol>
      </li>
      <!--  -->
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
    <ADivider class="bg-slate-500" />
    <h6 class="uppercase">
      Предостережения
    </h6>
    <ul class="flex flex-col gap-3 py-5 !list-disc animate-opacity">
      <li class=" ">
        <ThunderboltOutlined class="text-amber-500 mt-1" /> <div>Паттерны (голова и плечи и т.д.) не стоит рассматривать как сигнал</div>
      </li>
      <li class=" ">
        <ThunderboltOutlined class="text-amber-500 mt-1" />
        <div>На <UniversalUFocus text="V-образном развороте," /> уровень должен пробиваться - ложный вынос.</div>
      </li>
      <li>
        <ThunderboltOutlined class="text-amber-500 mt-1" />
        <div>
          Если у инструмента в моменте была <UniversalUFocus text="огромная дивергенция, а свеча не шелохнулась," /> то инструмент даёт хорошее движение в сторону сигнала, который был до этого,
          даже если дивергенция в противоположную сторону!
        </div>
      </li>
      <li>
        <ThunderboltOutlined class="text-amber-500 mt-1" />
        <div>
          Если <UniversalUFocus text="после большого усилия не происходит никакого результата," />
          значит перед нами слабое движение и нам не следует в него входить (если мы уже в позиции, нужно фиксироваться).
        </div>
      </li>
      <li>
        <ThunderboltOutlined class="text-amber-500 mt-1" />
        <div>
          <UniversalUFocus text="Если рынок движется без усилия по объему -" /> это не очень хорошо – это говорит об аномальности движения,
          такое движение может развернуться в любой момент.
          Лучше всего, чтобы между объемом и движением был баланс, такие движения являются самыми “здоровыми”
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

li {
@apply flex w-fit gap-2 justify-start items-start;
}
</style>
