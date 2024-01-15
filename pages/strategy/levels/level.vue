<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
useSeoMeta({
  title: 'Level',
  description: 'The best trading strategy. Level. Уровень. '
})
</script>

<template>
  <div class="w-full h-full animate-opacity">
    <UniversalUModuleTitle text="Уровень" />
    <p>
      Уровень - место, где рынок поменял направление. Зачастую уровень указывает на цену, на которой могли находиться лимитные ордера участников. Основная ценность уровня именно в нахождении крупного капитала.Все сигналы и большая часть моделей исследуется исключительно на уровнях
    </p>
    <p>
      <UniversalUFocus text="Если уровень пробивается по фону больше одного раза, он не работает" />
    </p>
    <p>
      <UniversalUFocus text="При подходе к уровню формируется объем" />
      (если объем не формируется, скорее всего уровень выставлен неправильно)
    </p>
    <p>
      <UniversalUFocus text="Если цена подходит к уровню через ускорение или затухание, скорее всего уровень будет отвергнут" />
    </p>
    <h5 class="uppercase underline text-center">
      Тормозные свечи
    </h5>
    <p>
      Присутствие крупного игрока можно заметить по тормозным свечам
      – свечам с большим объемом и хвостом по направлению движения.Тормозные свечи говорят нам о том,
      что кто-то выкупает все движение, а сделать это в состоянии только владелец очень крупного счета.
    </p>
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/strategy/tormoznie-svechi-1.png" />
    <p>
      Тормозных свечей может быть как несколько, так и всего одна.
      Однако, в таком случае на ней должен быть очень крупный объем, иначе нельзя с уверенностью сказать,
      что там кто-то загружался.
    </p>
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/strategy/tormoznie-svechi-2.png" />
    <p>
      Появление тормозных свечей не означает, что разворот произойдет именно сейчас.
      Цена может преодолеть еще некоторое количество пунктов, прежде чем у противоположной стороны появится инициатива.
    </p>
    <UniversalUImage href="https://firebunny-storage.b-cdn.net/trading/trading-strategy/strategy/tormoznie-svechi-3.png" />
    <h5 class="uppercase underline text-center">
      Пробой уровня
    </h5>
    <p>
      <UniversalUFocus text="Чтобы убедиться в истинности пробоя, нужно дождаться отката." />
      После пробоя объем снижается и цена начинает откатывать.
      Вернувшись к уровню ценовой диапазон сужается, после чего происходит импульс в сторону продолжения
    </p>
  </div>
</template>
