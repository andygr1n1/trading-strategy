<script setup lang="ts">
import { capitalize } from 'vue'
import { useStrategyStore } from '@/stores/StrategyStore'
const route = useRoute()
const strategyStore = useStrategyStore()
const { onChangeFilter } = strategyStore
const { filter, filteredNavigation } = storeToRefs(strategyStore)

const isActive = (path: string) => {
  return route.path.split('/')[2] === path
}

</script>

<template>
  <div
    class="md:min-w-[200px] flex-col w-full md:w-[200px] border-r border-transparent md:border-r-teal-500/50 h-full md:min-h-[calc(100vh-var(--top-bar-height))]">
    <input
      v-model="filter"
      class="rounded-sm px-2 sticky top-0 border-white/20 md:border-transparent h-10 w-[calc(100%-32px)] focus:w-[calc(100%-34px)] m-4 border  focus:border-teal-500"
      placeholder="Search..." @input="onChangeFilter" />
    <template v-for="item in filteredNavigation" :key="item">
      <NuxtLink :to="`/strategy/${item}`">
        <li class="menu-item" :class="{ active: isActive(item) }">
          {{ capitalize(item.split('-').join(' ')) }}
        </li>
      </NuxtLink>
    </template>
  </div>
</template>

<style scoped lang="scss">
.menu-item {
  @apply px-5 py-2 mx-4 md:mx-0 cursor-pointer border-l md:border-l-transparent text-xl md:text-base border-l-white/20 hover:text-teal-500 duration-300;
}

.active {
  @apply text-teal-500 duration-300;
}
</style>
