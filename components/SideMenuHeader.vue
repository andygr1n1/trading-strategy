<script setup lang="ts">
const route = useRoute()

const isActive = (path: string) => {
  return route.path.split('/')[1] === path
}
</script>

<template>
  <ul class="flex gap-2 items-center mx-auto w-fit justify-center h-[var(--top-bar-height)]">
    <li>
      <NuxtLink to="/blog" :class="{ active: isActive('blog') }">
        <HomeFilled class="icon" style="font-size: 18px;" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/strategy" :class="{ active: isActive('strategy') }">
        <SignalFilled class="icon" style="font-size: 18px;" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
li {
  @apply p-1 flex flex-auto md:flex-initial items-center justify-center;

}

li>a {
  @apply p-2 rounded-md;
}

li>a>.icon {
  @apply h-4 flex items-center justify-center;
}

.active {
  @apply bg-gradient duration-300;
}
</style>
