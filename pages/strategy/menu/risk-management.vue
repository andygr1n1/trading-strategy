<script setup lang="ts">

useSeoMeta({
  title: 'Trading strategy',
  description: 'The best trading strategy'
})
</script>

<template>
  <div class="w-full h-full py-3 animate-opacity">
    <UniversalUModuleTitle text="Риски" />
    <h6 class="uppercase">
      Фундаментальные правила
    </h6>
    <ol class="flex flex-col gap-3 py-5 list-disc animate-opacity ">
      <li>
        <ACheckbox size="large" checked /><span>Объем позиции (в сделке) (2% для торговли внутри дня) </span>
      </li>
      <li>
        <ACheckbox size="large" checked /><span>Объем позиции (в сделке) (5% при торговле в средний срок)</span>
      </li>
      <li>
        <ACheckbox size="large" checked /><span> Допустимая просадка - 10%</span>
      </li>
      <li>
        <ACheckbox size="large" checked /><span>Торговля во вторник, среду, и четверг
        </span>
      </li>
    </ol>
  </div>
</template>

<style scoped>

li {
@apply flex w-fit gap-2;
}
</style>
