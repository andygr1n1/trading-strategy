<script setup lang="ts">

useSeoMeta({
  title: 'The best trading strategy, the best crypto strategy',
  description: 'The best trading strategy, the best crypto strategy'
})

definePageMeta({
  layout: 'default'
})
</script>

<template>
  <div class="w-full h-full py-3 animate-opacity">
    <h5 class="text-slate-500 opacity-50 ">
      Теория
    </h5>
    <h6 class="uppercase">
      1. Определить Блоки на фоновом тайм фрейме
    </h6>
    <p>Сперва анализируем инструмент на предмет блоков.</p>
    <p>Все блоки анализируются  <UniversalUFocus text="на фоновом тайм фрейме." /></p>
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
    <h6 class="uppercase">
      2. Определить Уровни
    </h6>
    <p>
      <UniversalUFocus text="Уровни" /> указывают на место, где могут находиться лимитные ордера участников рынка. Основная цель - найти лимитные ордера крупного капитала.
    </p>
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/1-4-levels-1.png" description="Level" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/1-4-levels-2.png" description="Level" />
    <h5 class="text-slate-500 opacity-50">
      Практика
    </h5>
    <h6 class="uppercase">
      1. Вход в позицию
    </h6>
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-1-1-vhod_ot_order_block.png" description="Order Block" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-1-2-vhod_ot_breaker_block.png" description="Breaker Block" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-1-3-vhod_ot_mitigation_block.png" description="Mitigation Block" />
    <!--  -->
    <ADivider class="bg-slate-500" />
    <p class="bg-gradient w-fit text-slate-950 font-bold px-5 rounded-md">
      Вход от уровня в разворот
    </p>
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-1-4-vhod-ot-urovnea-v-razvorot.png" description="" />
    <!--  -->
    <ADivider class="bg-slate-500" />
    <p class="bg-gradient w-fit text-slate-950 font-bold px-5 rounded-md">
      Вход от уровня в продолжение:
    </p>
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-1-6-vhod-ot-urovnea-v-prodoljenie.png" description="" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-1-7-vhod-ot-urovnea-v-prodoljenie-v-2.png" description="" />
    <p> Входя в продолжение, все же лучше дожидаться большего отката.</p>
    <p>  Откат - это массивное движение, равное примерно 50% предыдущей волны. Откат не может произойти двумя-тремя свечами.</p>
    <ADivider class="bg-slate-500" />
    <!--  -->
    <h6 class="uppercase">
      2. Сигналы на вход
    </h6>
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-2-1-sujenie-rashirenie-1.png" description="Сужение-расширение" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-2-1-sujenie-rashirenie-2.png" description="Сужение-расширение" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/v-razvorot%2Bdelta%2Brealizacia.png" description="V from level" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/v-razvotot%2Bdivergencia%2Brealizacia-2.png" description="V from level" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-2-2-dvoinoe-dno.png" description="Двойное дно" />
    <UniversalUImage
      href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/otskok%2Bstupenika%2Bdivergencia_realizacia.png" description="дивергенция + реализация (только от блока)
" />
    <UniversalUImage
      href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/v-razvotot%2Bdivergencia%2Brealizacia-2.png" description="дивергенция + реализация (только от блока)
" />
    <UniversalUImage
      href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-2-3-otskok%2Bstupenika-2.png" description="отскок + ступенька  (только от блока)
" />
    <UniversalUImage
      href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-2-3-otkskok%2Bstupenika-1.png" description="отскок + ступенька  (только от блока)
" />
    <h6 class="uppercase">
      3. Выходы из позиций
    </h6>
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-3-1-vihod-po-stopu-v-minus.png" description="По стопу в минус" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-3-2-vihod-po-stopu-v-plus.png" description="По стопу в плюс" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-3-3-vihod-na-divergencii.png" description="Выход на дивергенции частью" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-3-4-vihod-na-uskorenii-chastichnii.png" description="Выход на ускорении частью" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-3-5-vihod-v-microflete-chastiu.png" description="Выход в микро-флете" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-3-6-vihod-po-anomalinoi-volatilinosti.png" description="Выход по аномальной волатильности" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-3-7-vihod-po-celi.png" description="Выход по цели" />
    <h6 class="uppercase">
      4. Выходы из позиций
    </h6>
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-4-1-otkaz-pri-anomalinoi-volatilinosti.png" description="Не входить при аномальной волатильности" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-4-2-otsutstvie-adekvatnogo-dvijenia.png" description="Не входить при отсутствии адекватного движения" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/2-4-3-vspishka_obiemov.png" description="Не входить при вспышках объёмов" />
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/treugolinik%20-%20signal%20protiv%20vhoda.png" description="Не входить в треугольнике" />
    <p>Также следует обратить особое внимание при <UniversalUFocus text="выходе важных новостей" /> и <UniversalUFocus text="по времени" />.</p>
  </div>
</template>
