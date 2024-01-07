<script setup lang="ts">
import { capitalize } from 'vue'
import { useStrategyStore } from '@/stores/StrategyStore'

defineProps<{
  action?:() => void
}>()

const route = useRoute()
const strategyStore = useStrategyStore()
const { onChangeFilter } = strategyStore
const { filter, filteredNavigation } = storeToRefs(strategyStore)

const isActive = (path: string) => {
  return route.path.split('/')[2] === path
}

</script>

<template>
  <input
    v-model="filter"
    class="rounded-sm px-2 sticky top-0 border-white/20 md:border-transparent h-10 w-[calc(100%-32px)] focus:w-[calc(100%-34px)] m-4 border  focus:border-teal-500"
    placeholder="Search..." @input="onChangeFilter" />
  <template v-for="item in filteredNavigation" :key="item">
    <div class="opacity-30 text-slate-400 pointer-events-none font-bold uppercase py-2">
      {{ item.title }}
    </div>
    <template v-for="subMenu in item.data " :key="subMenu">
      <NuxtLink :to="`/strategy/${subMenu}`">
        <li class="menu-item" :class="{ active: isActive(subMenu) }" @click="action?.()">
          {{ capitalize(subMenu.split('-').join(' ')) }}
        </li>
      </NuxtLink>
    </template>
  </template>
</template>

<style scoped lang="scss">
.menu-item {
  @apply px-5 py-2 mx-4 md:mx-0 cursor-pointer border-l md:border-l-transparent text-xl md:text-base border-l-white/20 hover:text-teal-500 duration-300;
}

.active {
  @apply text-gradient duration-300;
}
</style>
