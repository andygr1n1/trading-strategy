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
  <div class="w-full h-full animate-opacity">
    <ArticleATitle text="Ордер Блок" />
    <p>
      <UniversalUFocus text=" Ордер блок" />
      - это ценовая зона, где крупный
      капитал активно набирал свою позицию и
      также оставил отложенные лимитные ордера для
      приостановки цены в случае возврата и разворота
      цены в обратном направлении. Order Block —
      средняя цена входа крупного игрока.
    </p>
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/graph-models/order-block-rule.png" description="Ордер/Брейкер Блок" />
    <p>
      На графике ордер блок определяется как последняя
      откатная свеча которая:
    </p>
    <p>1. Захватила ликвидность;</p>
    <p>2. После образовался имбаланс;</p>
    <p>3. Сформировалось новое импульсное движение.</p>
    <p>
      Ордер блоки можно использовать на всех
      таймфреймах, главное соблюдать правила. Чем
      старше таймфрейм, тем сильнее отработает ордер
      блок. Всегда необходимо отдавать приоритет
      старшему таймфрейму.
    </p>
    <p>
      <UniversalUFocus
        text="Имбаланс (отсутствие равновесия между ордерами на
      покупку и продажу)" />
      - возникновение импульса (серия
      свечей идущих одна за другой, свечи должны быть
      большие - волатильные).
    </p>
    <p>
      Волатильные свечи должны быть хотя бы раза в
      полтора больше.
    </p>
    <p>
      Важно чтобы это были свечи одного и того же цвета
      идущего друг за другом. Количество свечей не важно.
      Но в основном встречаются 1-4.
    </p>
    <p>
      Небольшой хвостик может быть, но если хвост с тело
      свечи, или больше - это уже прерывает имбаланс.
      Имбаланс должен перебивать последний максимум
      цены.
    </p>
    <p>
      По последней свече перед имбалансом можно
      выставить ордер блок. Именно эта свеча становится
      <UniversalUFocus
        text="Точкой интереса" />.
    </p>
    <p>
      После того как имбаланс завершится, через
      неопределенное время, в точке откуда начался
      имбаланс (к ордер блоку), с большой вероятностью
      произойдет “отскок цены”.
    </p>
    <p>
      <UniversalUFocus
        text="  Далее начинается поиск
      точки входа." />
    </p>
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/graph-models/order-block.png" description="Ордер Блок" />
    <p>
      <UniversalUFocus
        text="Смекаешь? " />
    </p>
  </div>
</template>
