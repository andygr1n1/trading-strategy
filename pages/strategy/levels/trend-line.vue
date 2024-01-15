<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
useSeoMeta({
  title: 'Trend line',
  description: 'The best trading strategy. Trend Line. Трендовые линии. '
})
</script>

<template>
  <div class="w-full h-full animate-opacity">
    <UniversalUModuleTitle text="Трендовые линии" />
    <p>
      Существует два способа определения точки ликвидности: при помощи ценовых (горизонтальных) уровней и
      <UniversalUFocus text="при помощи трендовых (наклонных) линий." />
    </p>
    <p>Если во флете лучше работают уровни, то на тренде однозначно лучше будут отрабатывать именно линии.</p>
    <p>
      Есть два вида трендов: восходящий (бычий) и нисходящий (медвежий).
    </p>
    <p>
      <UniversalUFocus text="При восходящем тренде " /> прочерчиваем линию поддержки;
    </p>
    <p><UniversalUFocus text="При нисходящем – " /> линию сопротивления, но никак не наоборот.</p>
    <p>
      При построении линий тренда важно обращать внимание на угол атаки:
      если линия тренда получается слишком резкой или – наоборот – слишком плавной,
      то ее не следует использовать в торговле.
    </p>
    <p><UniversalUFocus text="Самые сильные линии тренда – это линии с углом атаки примерно в 45 градусов." /></p>
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/strategy/strategy-primary-signas-level-ugol-ataki-45.png" />
    <h6 class="uppercase  my-5">
      Как использовать трендовые линии
    </h6>
    <p>
      <UniversalUFocus text="Точка Входа на продолжение – " />
      когда рынок возвращается к трендовой линии и дает нам сигнал на вход
    </p>
    <p>
      <UniversalUFocus text="Точка Входа на разворот – " />
      Точка Входа на разворот – когда рынок пробивает трендовую линию и делает к ней ретест с обратной стороны
    </p>
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/strategy/trendovie-linii-tvh-na-prodoljenie.png" description="ТВХ в продолжение" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/strategy/trendovie-linii-tvh-v-razvorot.png" description="ТВХ в разворот" />
    <p>
      Иногда в рынке создается ситуация, когда отчетливо видны и поддержка, и сопротивление.
      В таком случае мы можем провести <UniversalUFocus text="трендовый канал " />и торговать от границы до границы.
    </p>
    <p><UniversalUFocus text="ВАЖНО: торговать только по направлению канала, если канал восходящий, то в сторону покупок" />, но никак не наоборот.</p>
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/strategy/trendovie-linii-kanal.png" description="ТВХ в канале" />
  </div>
</template>
